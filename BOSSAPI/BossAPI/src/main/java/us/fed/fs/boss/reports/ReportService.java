package us.fed.fs.boss.reports;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import java.util.concurrent.CompletableFuture;
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
    public CompletableFuture<PayrollDetails> getPayrollDetailsJSON(Short financialYear) throws InterruptedException {
        
        PayrollDetails report = new PayrollDetails();

       List<EmployeeProfile> profiles = employeeProfileRepository.findAll();


       // Ω(n) O(n^2)
       Expense[] salaryExpenses = expenseRepository.findAll().stream()
                .filter(expense -> expense.getBudgetObjectCode().getId().equals(Long.valueOf(11L)))
                .toArray(Expense[]::new);

       List<PayrollDetailsRow> rows = new ArrayList<>();

        BigDecimal totalRegPayToDate = BigDecimal.ZERO;
        BigDecimal totalOvertimeToDate = BigDecimal.ZERO;

        // O(n^3)
       for(EmployeeProfile profile : profiles) {
           PayrollDetailsRow row = new PayrollDetailsRow();


           BigDecimal regPayToDate = BigDecimal.ZERO;
           BigDecimal overtimeToDate = BigDecimal.ZERO;

           row.setSection(profile.getActivityCode().getCode());
           row.setName(profile.getLastName() + ", " + profile.getFirstName());
           row.setPpLeft(profile.getPayPeriodsLeft());

           row.setRegPayPerPP(profile.getRegPayPerPayPeriod());

           Expense[] userSalaries = Arrays.stream(salaryExpenses)
                   .filter(
                           expense -> expense.getEmployeeProfile()
                                   .getId().equals(profile.getId()) && expense.getFinancialYear().equals(financialYear)

                   )
                   .toArray(Expense[]::new);

           for(Expense salary : userSalaries) {
               for(ExpenseDetail detail : salary.getExpenseDetails()) {
                   /*
                   (8, 'Base Salaries'),
                    (9, 'Overtime'),
                    */
                   if(detail.getExpenseCode().getId() == 8L) {
                       regPayToDate = regPayToDate.add(detail.getAmount());
                   } else if(detail.getExpenseCode().getId() == 9L) {
                       overtimeToDate = overtimeToDate.add(detail.getAmount());
                   }
               }
           }

           BigDecimal regPayForecast = profile.getRegPayPerPayPeriod().multiply(new BigDecimal(profile.getPayPeriodsLeft().intValue()));

           /*
                @Column(name = "PayPeriodsLeft")
                private Short payPeriodsLeft;

                @Column(name = "RegPayPerPayPeriod")
                private BigDecimal regPayPerPayPeriod;
            */

           totalRegPayToDate = totalRegPayToDate.add(regPayToDate);
           totalOvertimeToDate = totalOvertimeToDate.add(overtimeToDate);

           row.setRegPayToDate(regPayToDate);
           row.setOvertimeToDate(overtimeToDate);
           row.setRegPayForecast(regPayForecast);


           /*
               private BigDecimal regPayForecast;
               private BigDecimal totalFYForecast;
           }
           */


       }

        report.setRows(rows);
        report.setTotalRegPayToDate(totalRegPayToDate);
        report.setTotalOvertimeToDate(totalOvertimeToDate);
        
        /*
            @Getter @Setter @NoArgsConstructor
            public class PayrollDetails {
                private List<PayrollDetailsRow> rows;
                private BigDecimal totalRegPayToDate;
                private BigDecimal totalOvertimeToDate;
                private BigDecimal totalRegPayForecast;
                private BigDecimal grandTotalFYForecast;
            }

        */
        
        return CompletableFuture.completedFuture(report);
        
    }

    @Async
    public CompletableFuture<PayrollForecast> getSalaryForecastJSON() throws InterruptedException {

        PayrollForecast report = new PayrollForecast();
        List<Expense> expenses = expenseRepository.findAll();

        // boc 11 is salary expenses
        Expense[] expensesFiltered = expenses.stream()
                .filter(expense -> expense.getBudgetObjectCode().getId().equals(Long.valueOf(11L)))
                .toArray(Expense[]::new);

        // expenseRepository.findAll()
        List<ActivityCode> codes = activityCodeRepository.findAll();
        
        List<PayrollForecastRow> rows = new ArrayList<>();

        BigDecimal regPayForecastTotal = BigDecimal.ZERO;
        BigDecimal regPayToDateTotal = BigDecimal.ZERO;
        BigDecimal totalFYForecastTotal = BigDecimal.ZERO;

        for (ActivityCode code : codes) {

            PayrollForecastRow row = new PayrollForecastRow();
            row.setActivityCode(code.getCode());
            row.setActivityCodeDescription(code.getName());

            // row.s
            BigDecimal regPayForecast = BigDecimal.ZERO;
            BigDecimal regPayToDate = BigDecimal.ZERO;
            BigDecimal totalFYForecast = BigDecimal.ZERO;

            for(Expense expense : expensesFiltered) {
                if(expense.getActivityCode().getCode().equals(code.getCode())) {

                }
            }


            row.setRegPayForecast(regPayForecast);
            row.setRegPayToDate(regPayToDate);
            row.setTotalFYForecast(totalFYForecast);
            
            rows.add(row);
            
            regPayForecastTotal = regPayForecastTotal.add(regPayForecast);
            regPayToDateTotal = regPayForecastTotal.add(regPayToDate);
            totalFYForecastTotal = regPayForecastTotal.add(totalFYForecast);

        }
        
        report.setGrandTotalPayForecast(regPayForecastTotal);
        report.setGrandTotalFYForecast(totalFYForecastTotal);
        report.setGrandTotalPayToDate(regPayToDateTotal);
        report.setRows(rows);

        return CompletableFuture.completedFuture(report);

    }

    // /budgetSummary/{financialYear}/{verified/unverified/all}
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
