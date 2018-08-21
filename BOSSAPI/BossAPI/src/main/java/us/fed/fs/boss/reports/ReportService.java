package us.fed.fs.boss.reports;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import us.fed.fs.boss.model.ActivityCode;
import us.fed.fs.boss.model.EmployeeProfile;
import us.fed.fs.boss.model.Expense;
import us.fed.fs.boss.model.ExpenseDetail;
import us.fed.fs.boss.model.JobCode;
import us.fed.fs.boss.reports.ReportsFileBuilder.FileType;
import us.fed.fs.boss.repository.ActivityCodeRepository;
import us.fed.fs.boss.repository.EmployeeProfileRepository;
import us.fed.fs.boss.repository.ExpenseRepository;
import us.fed.fs.boss.repository.JobCodeRepository;

@Service
public class ReportService {

    @Autowired
    ExpenseRepository expenseRepository;

    @Autowired
    JobCodeRepository jobCodeRepository;

    @Autowired
    ActivityCodeRepository activityCodeRepository;

    @Autowired
    EmployeeProfileRepository employeeProfileRepository;

    @Async
    public CompletableFuture<PayrollDetails> getPayrollDetails(Optional<JobCode> jobCode) throws InterruptedException {

        PayrollDetails report = new PayrollDetails();

        List<EmployeeProfile> profiles = employeeProfileRepository.findAll();

        // Ω(n) O(n^2)
        Expense[] salaryExpenses = expenseRepository.findAll().stream()
                .filter(expense -> expense.getBudgetObjectCode().getId().equals(Long.valueOf(11L)))
                .toArray(Expense[]::new);

        List<PayrollDetailsRow> rows = new ArrayList<>();

        BigDecimal totalRegPayToDate = BigDecimal.ZERO;
        BigDecimal totalOvertimeToDate = BigDecimal.ZERO;
        BigDecimal totalRegPayForecast = BigDecimal.ZERO;
        BigDecimal grandTotalFYForecast = BigDecimal.ZERO;

        // O(n^3)
        for (EmployeeProfile profile : profiles) {
            PayrollDetailsRow row = new PayrollDetailsRow();

            BigDecimal regPayToDate = BigDecimal.ZERO;
            BigDecimal overtimeToDate = BigDecimal.ZERO;

            row.setSection(profile.getActivityCode().getCode());
            row.setSectionDescription(profile.getActivityCode().getName());
            row.setName(profile.getLastName() + ", " + profile.getFirstName());
            row.setPpLeft(profile.getPayPeriodsLeft());

            row.setRegPayPerPP(profile.getRegPayPerPayPeriod());

            Expense[] userSalaries = Arrays.stream(salaryExpenses)
                    .filter(expense -> expense.getEmployeeProfile()
                            .getId().equals(profile.getId()))
                    .toArray(Expense[]::new);

            /* (8, 'Base Salaries')
             (9, 'Overtime'),
             */
            if (jobCode.isPresent()) {
                for (Expense salary : userSalaries) {
                    for (ExpenseDetail detail : salary.getExpenseDetails().stream()
                            .filter(expenseDetail -> expenseDetail.getJobCode().getId().equals(jobCode.get().getId()))
                            .toArray(ExpenseDetail[]::new)) {
                        if (detail.getExpenseCode().getId() == 8L) {
                            regPayToDate = regPayToDate.add(detail.getAmount());
                        } else if (detail.getExpenseCode().getId() == 9L) {
                            overtimeToDate = overtimeToDate.add(detail.getAmount());
                        }
                    }
                }
            } else {
                for (Expense salary : userSalaries) {
                    for (ExpenseDetail detail : salary.getExpenseDetails()) {
                        if (detail.getExpenseCode().getId() == 8L) {
                            regPayToDate = regPayToDate.add(detail.getAmount());
                        } else if (detail.getExpenseCode().getId() == 9L) {
                            overtimeToDate = overtimeToDate.add(detail.getAmount());
                        }
                    }
                }
            }

            BigDecimal regPayForecast = profile.getRegPayPerPayPeriod().multiply(new BigDecimal(profile.getPayPeriodsLeft().intValue()));

            totalRegPayToDate = totalRegPayToDate.add(regPayToDate);
            totalOvertimeToDate = totalOvertimeToDate.add(overtimeToDate);

            BigDecimal totalFYForecast = regPayForecast
                    .add(regPayToDate)
                    .add(overtimeToDate);

            row.setRegPayToDate(regPayToDate);
            row.setOvertimeToDate(overtimeToDate);
            row.setRegPayForecast(regPayForecast);
            row.setTotalFYForecast(totalFYForecast);

            totalRegPayForecast = totalRegPayForecast.add(regPayForecast);
            grandTotalFYForecast = grandTotalFYForecast.add(totalFYForecast);

            rows.add(row);

        }

        report.setRows(rows);
        report.setTotalRegPayToDate(totalRegPayToDate);
        report.setTotalOvertimeToDate(totalOvertimeToDate);
        report.setTotalRegPayForecast(totalRegPayForecast);
        report.setGrandTotalFYForecast(grandTotalFYForecast);

        return CompletableFuture.completedFuture(report);

    }

    @Async
    public CompletableFuture<PayrollForecast> getPayrollForecast(Optional<JobCode> jobCode) throws InterruptedException {

        try {

            PayrollForecast report = new PayrollForecast();

            CompletableFuture<PayrollDetails> summaryFutureXLSX
                    = this.getPayrollDetails(jobCode);

            Map<String, PayrollForecastRow> map = new HashMap<>();

            List<ActivityCode> acs = activityCodeRepository.findAll();

            acs.stream().forEach((ac) -> {
                PayrollForecastRow row = new PayrollForecastRow();
                row.setActivityCode(ac.getCode());
                row.setActivityCodeDescription(ac.getName());
                row.setRegPayToDate(BigDecimal.ZERO);
                row.setRegPayForecast(BigDecimal.ZERO);
                row.setTotalFYForecast(BigDecimal.ZERO);
                map.put(ac.getCode(), row);
            });

            BigDecimal grandTotalPayToDate = BigDecimal.ZERO;
            BigDecimal grandTotalPayForecast = BigDecimal.ZERO;
            BigDecimal grandTotalFYForecast = BigDecimal.ZERO;
            
            PayrollDetails details = summaryFutureXLSX.get();

            for (PayrollDetailsRow detail : details.getRows()) {

                PayrollForecast payrollForecast = new PayrollForecast();
                PayrollForecastRow row = map.get(detail.getSection());

                BigDecimal regPayToDate = row.getRegPayToDate().add(detail.getRegPayToDate());
                BigDecimal regPayForecast = row.getRegPayForecast().add(detail.getRegPayForecast());
                BigDecimal totalFYForecast = row.getTotalFYForecast().add(detail.getTotalFYForecast());

                row.setRegPayToDate(regPayToDate);
                row.setRegPayForecast(regPayForecast);
                row.setTotalFYForecast(totalFYForecast);

                grandTotalPayToDate = grandTotalPayToDate.add(row.getRegPayToDate());
                grandTotalPayForecast = grandTotalPayForecast.add(row.getRegPayForecast());
                grandTotalFYForecast = grandTotalFYForecast.add(row.getTotalFYForecast());

                map.put(detail.getSection(), row);

            }

            report.setGrandTotalPayToDate(grandTotalPayToDate);
            report.setGrandTotalPayForecast(grandTotalPayForecast);
            report.setGrandTotalFYForecast(grandTotalFYForecast);
            List<PayrollForecastRow> rows = new ArrayList<>(map.values());
            report.setRows(rows);

            return CompletableFuture.completedFuture(report);

        } catch (ExecutionException ex) {
            Logger.getLogger(ReportService.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }

    }

    @Async
    public CompletableFuture<BudgetSummary> getBudgetSummaryJSON(Short financialYear, String verified) throws InterruptedException {

        BudgetSummary report = new BudgetSummary();
        List<Expense> expenses = expenseRepository.findByFinancialYear(financialYear);
        List<JobCode> jobCodes = jobCodeRepository.findByFinancialYear(financialYear);

        List<ExpenseDetail> details = new ArrayList<>();
        List<BudgetSummaryRow> reportList = new ArrayList<>();

        for (Expense exp : expenses) {
            details.addAll(exp.getExpenseDetails());
        }

        BigDecimal operatingTotal = BigDecimal.ZERO;
        BigDecimal obligatedTotal = BigDecimal.ZERO;

        for (JobCode jc : jobCodes) {
            ExpenseDetail[] jcdeets = details.stream()
                    .filter(detail -> detail.getJobCode().getJobCode().equals(jc.getJobCode()))
                    .toArray(ExpenseDetail[]::new);
            BudgetSummaryRow summaryRow = new BudgetSummaryRow();
            summaryRow.setDescription(jc.getDescription());
            summaryRow.setFiscalYear(jc.getFinancialYear().toString());
            summaryRow.setJobCode(jc.getJobCode());
            BigDecimal operating = jc.getAmount();
            BigDecimal obligated = BigDecimal.ZERO;
            for (ExpenseDetail dt : jcdeets) {
                obligated = obligated.add(dt.getAmount());
            }
            operatingTotal = operatingTotal.add(operating);
            obligatedTotal = obligatedTotal.add(obligated);
            summaryRow.setOperating(operating.toString());
            summaryRow.setObligated(obligated.toString());
            BigDecimal balance = operating.subtract(obligated);
            summaryRow.setBalance(balance.toString());
            reportList.add(summaryRow);
        }

        BigDecimal balanceTotal = operatingTotal.subtract(obligatedTotal);

        report.setRows(reportList);

        report.setTotalObligated(obligatedTotal.toPlainString());
        report.setTotalOperating(operatingTotal.toPlainString());
        report.setTotalBalance(balanceTotal.toPlainString());

        return CompletableFuture.completedFuture(report);

    }

    @Async
    public CompletableFuture<File> getBudgetSummaryFile(Short financialYear, String verified, FileType fileType) throws InterruptedException, IOException {

        BudgetSummary report = new BudgetSummary();
        List<Expense> expenses = expenseRepository.findByFinancialYear(financialYear);
        List<JobCode> jobCodes = jobCodeRepository.findByFinancialYear(financialYear);

        List<ExpenseDetail> details = new ArrayList<>();
        List<BudgetSummaryRow> reportList = new ArrayList<>();

        for (Expense exp : expenses) {
            details.addAll(exp.getExpenseDetails());
        }

        BigDecimal operatingTotal = BigDecimal.ZERO;
        BigDecimal obligatedTotal = BigDecimal.ZERO;

        for (JobCode jc : jobCodes) {
            ExpenseDetail[] jcdeets = details.stream()
                    .filter(detail -> detail.getJobCode().getJobCode().equals(jc.getJobCode()))
                    .toArray(ExpenseDetail[]::new);
            BudgetSummaryRow summaryRow = new BudgetSummaryRow();
            summaryRow.setDescription(jc.getDescription());
            summaryRow.setFiscalYear(jc.getFinancialYear().toString());
            summaryRow.setJobCode(jc.getJobCode());
            BigDecimal operating = jc.getAmount();
            BigDecimal obligated = BigDecimal.ZERO;
            for (ExpenseDetail dt : jcdeets) {
                obligated = obligated.add(dt.getAmount());
            }
            operatingTotal = operatingTotal.add(operating);
            obligatedTotal = obligatedTotal.add(obligated);
            summaryRow.setOperating(operating.toString());
            summaryRow.setObligated(obligated.toString());
            BigDecimal balance = operating.subtract(obligated);
            summaryRow.setBalance(balance.toString());
            reportList.add(summaryRow);
        }

        BigDecimal balanceTotal = operatingTotal.subtract(obligatedTotal);

        report.setRows(reportList);

        report.setTotalObligated(obligatedTotal.toPlainString());
        report.setTotalOperating(operatingTotal.toPlainString());
        report.setTotalBalance(balanceTotal.toPlainString());

        ReportsFileBuilder fileBuilder = new ReportsFileBuilder(fileType);

        File f = fileBuilder.getBudgetSummary(report);

        return CompletableFuture.completedFuture(f);

    }

}
