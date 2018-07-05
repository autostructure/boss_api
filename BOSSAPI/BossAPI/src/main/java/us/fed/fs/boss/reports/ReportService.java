package us.fed.fs.boss.reports;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import us.fed.fs.boss.model.ActivityCode;
import us.fed.fs.boss.model.Expense;
import us.fed.fs.boss.model.ExpenseDetail;
import us.fed.fs.boss.model.JobCode;
import us.fed.fs.boss.reports.ReportsFileBuilder.FileType;
import us.fed.fs.boss.repository.ActivityCodeRepository;
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

    @Async
    public CompletableFuture<PayrollForecast> getSalaryForecastJSON() throws InterruptedException {

        PayrollForecast report = new PayrollForecast();
        List<Expense> expenses = expenseRepository.findAll();

        // boc 11 is salary expenses
        expenses.stream()
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

            // do some muffukin maths here!!!!!!!!!!!! ~~~~~~~~~~~~~~~~~~~~~~~~~
            
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
