package us.fed.fs.boss;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletContext;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import us.fed.fs.boss.exception.ResourceNotFoundException;
import us.fed.fs.boss.model.ActivityCode;
import us.fed.fs.boss.model.BudgetObjectCode;
import us.fed.fs.boss.model.EmployeeProfile;
import us.fed.fs.boss.model.Expense;
import us.fed.fs.boss.model.ExpenseCode;
import us.fed.fs.boss.model.JobCode;
import us.fed.fs.boss.model.PaymentCode;
import us.fed.fs.boss.reports.BudgetSummary;
import us.fed.fs.boss.reports.FileTypeDetector;
import us.fed.fs.boss.reports.ReportService;
import us.fed.fs.boss.reports.ReportsFileBuilder.FileType;
import us.fed.fs.boss.repository.ActivityCodeRepository;
import us.fed.fs.boss.repository.BudgetObjectCodeRepository;
import us.fed.fs.boss.repository.EmployeeProfileRepository;
import us.fed.fs.boss.repository.ExpenseCodeRepository;
import us.fed.fs.boss.repository.ExpenseRepository;
import us.fed.fs.boss.repository.JobCodeRepository;
import us.fed.fs.boss.repository.PaymentCodeRepository;

@RestController
public class BudgetController {

    @Autowired
    ExpenseRepository expenseRepository;

    @Autowired
    JobCodeRepository jobCodeRepository;

    @Autowired
    ExpenseCodeRepository expenseCodeRepository;

    @Autowired
    PaymentCodeRepository paymentCodeRepository;

    @Autowired
    ActivityCodeRepository activityCodeRepository;

    @Autowired
    BudgetObjectCodeRepository budgetObjectCodeRepository;

    @Autowired
    EmployeeProfileRepository employeeProfileRepository;

    @Autowired
    ReportService reportService;

    @Autowired
    private ServletContext servletContext;

    // Get All Expenses
    @GetMapping("/expense")
    public List<Expense> getAllExpenses(@RequestParam(value = "financialYear", required = false) Short financialYear) {
        if (financialYear == null) {
            return expenseRepository.findAll();
        } else {
            return expenseRepository.findByFinancialYear(financialYear);
        }
    }

    @GetMapping("/expense/{id}")
    public Expense getExpenseById(@PathVariable(value = "id") Long expenseId) {
        return expenseRepository.findById(expenseId)
                .orElseThrow(() -> new ResourceNotFoundException("Expense", "id", expenseId));
    }

    @PostMapping("/expense")
    public Expense createExpense(@Valid @RequestBody Expense expenseDetails) {
        return expenseRepository.save(expenseDetails);
    }

    @PutMapping("/expense/{id}")
    public Expense updateExpense(@PathVariable(value = "id") Long expenseId,
                                 @Valid @RequestBody Expense expenseDetails) {

        expenseRepository.findById(expenseId)
                .orElseThrow(() -> new ResourceNotFoundException("Expense", "id", expenseId));

        Expense updatedExpense = expenseRepository.save(expenseDetails);
        return updatedExpense;
    }

    @DeleteMapping("/expense/{id}")
    public ResponseEntity<?> deleteExpense(@PathVariable(value = "id") Long expenseId) {

        Expense expense = expenseRepository.findById(expenseId)
                .orElseThrow(() -> new ResourceNotFoundException("Expense", "id", expenseId));
        expenseRepository.delete(expense);
        return ResponseEntity.ok().build();

    }

    // Get All JobCodes
    @GetMapping("/jobCode")
    public List<JobCode> getAllJobCodes(@RequestParam(value = "financialYear", required = false) Short financialYear) {
        if (financialYear == null) {
            return jobCodeRepository.findAll();
        } else {
            return jobCodeRepository.findByFinancialYear(financialYear);
        }
    }

    @GetMapping("/jobCode/{id}")
    public JobCode getJobCodeById(@PathVariable(value = "id") Long jobCodeId) {
        return jobCodeRepository.findById(jobCodeId)
                .orElseThrow(() -> new ResourceNotFoundException("JobCode", "id", jobCodeId));
    }

    // @PostMapping("/jobCode")
    // public JobCode createJobCode(@Valid @RequestBody JobCode jobCodeDetails) {
    //     return jobCodeRepository.save(jobCodeDetails);
    // }
    @PostMapping("/jobCode")
    public ResponseEntity createJobCode(@Valid @RequestBody JobCode jobCodeDetails) {
        jobCodeDetails = jobCodeRepository.save(jobCodeDetails);
        return new ResponseEntity<JobCode>(jobCodeDetails, HttpStatus.OK);

    }

    @PutMapping("/jobCode/{id}")
    public JobCode updateJobCode(@PathVariable(value = "id") Long jobCodeId,
                                 @Valid @RequestBody JobCode jobCodeDetails) {

        jobCodeRepository.findById(jobCodeId)
                .orElseThrow(() -> new ResourceNotFoundException("JobCode", "id", jobCodeId));

        JobCode updatedJobCode = jobCodeRepository.save(jobCodeDetails);
        return updatedJobCode;
    }

    @DeleteMapping("/jobCode/{id}")
    public ResponseEntity<?> deleteJobCode(@PathVariable(value = "id") Long jobCodeId) {
        JobCode jobCode = jobCodeRepository.findById(jobCodeId)
                .orElseThrow(() -> new ResourceNotFoundException("JobCode", "id", jobCodeId));
        jobCodeRepository.delete(jobCode);
        return ResponseEntity.ok().build();
    }

    // Get All Activity Codes
    @GetMapping("/activityCode")
    public List<ActivityCode> getAllActivityCodes() {
        return activityCodeRepository.findAll();
    }

    // Get All Budget Object Codes
    @GetMapping("/budgetObjectCode")
    public List<BudgetObjectCode> getAllBudgetObjectCodes() {
        return budgetObjectCodeRepository.findAll();
    }

    // Get All Expense Codes
    @GetMapping("/expenseCode")
    public List<ExpenseCode> getAllExpenseCodes() {
        return expenseCodeRepository.findAll();
    }

    // Get All Payment Codes
    @GetMapping("/paymentCode")
    public List<PaymentCode> getAllPaymentCodes() {
        return paymentCodeRepository.findAll();
    }

    // Get All Employee Profiles
    @GetMapping("/employeeProfile")
    public List<EmployeeProfile> getAllEmployeeProfiles() {
        return employeeProfileRepository.findAll();
    }

    // Get Budget Summary JSON
    @GetMapping("/budgetSummary/{type}/{financialYear}/{verified}")
    public ResponseEntity getBudgetSummary(
            @PathVariable("type") String type,
            @PathVariable("financialYear") Short financialYear,
            @PathVariable("verified") String verified
    ) throws InterruptedException, IOException, ExecutionException {

        verified = verified.toLowerCase();
        if (!verified.equals("verified") && !verified.equals("unverfied") && !verified.equals("all")) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        type = type.toLowerCase();
        Map<String, FileType> types = new HashMap<>();
        types.put("csv", FileType.CSV);
        types.put("pdf", FileType.PDF);
        types.put("xlsx", FileType.XLSX);

        try {
            switch (type) {
                case "json":
                    CompletableFuture<BudgetSummary> summaryFutureJSON
                            = reportService.getBudgetSummaryJSON(financialYear, verified);
                    BudgetSummary report = summaryFutureJSON.get();
                    return new ResponseEntity<BudgetSummary>(report, HttpStatus.OK);
                case "csv":
                case "pdf":
                case "xlsx":
                    CompletableFuture<File> summaryFutureXLSX
                            = reportService.getBudgetSummaryFile(financialYear, verified, types.get(type));
                    File file = summaryFutureXLSX.get();
                    MediaType mediaType = FileTypeDetector.getMediaTypeForFileName(this.servletContext, file.getName());
                    InputStreamResource resourceXLSX = new InputStreamResource(new FileInputStream(file));
                    return ResponseEntity.ok()
                            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + file.getName())
                            .contentType(mediaType)
                            .contentLength(file.length())
                            .body(resourceXLSX);
                default:
                    return new ResponseEntity(HttpStatus.BAD_REQUEST);
            }
        } catch (ExecutionException | InterruptedException ex) {
            Logger.getLogger(BudgetController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}