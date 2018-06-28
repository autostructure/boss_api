package us.fed.fs.boss.reports;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import us.fed.fs.boss.model.Expense;
import us.fed.fs.boss.model.ExpenseDetail;
import us.fed.fs.boss.model.JobCode;
import us.fed.fs.boss.repository.ExpenseRepository;
import us.fed.fs.boss.repository.JobCodeRepository;

@Service
public class ReportService {
    
    @Autowired
    ExpenseRepository expenseRepository;
    
    @Autowired
    JobCodeRepository jobCodeRepository;

    // /budgetSummary/{financialYear}/{verified/unverified/all}
    @Async
    public CompletableFuture<BudgetSummary> getBudgetSummary(Short financialYear, String verified) throws InterruptedException {
        
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
    
}
