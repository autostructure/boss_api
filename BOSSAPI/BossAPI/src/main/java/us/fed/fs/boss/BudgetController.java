package us.fed.fs.boss;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletContext;
import javax.validation.Valid;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

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
import us.fed.fs.boss.reports.BudgetSummaryRow;
import us.fed.fs.boss.reports.FileTypeDetector;
import us.fed.fs.boss.reports.ReportService;
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

    @PostMapping("/jobCode")
    public JobCode createJobCode(@Valid @RequestBody JobCode jobCodeDetails) {
        return jobCodeRepository.save(jobCodeDetails);
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
    public ResponseEntity getBudgetSummaryJSON(
            @PathVariable("type") String type,
            @PathVariable("financialYear") Short financialYear,
            @PathVariable("verified") String verified
    ) throws InterruptedException, IOException, ExecutionException {
        verified = verified.toLowerCase();
        if (!verified.equals("verified") && !verified.equals("unverfied") && !verified.equals("all")) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        CompletableFuture<BudgetSummary> summaryFuture = null;
        BudgetSummary report = null;
        List<BudgetSummaryRow> reportList = null;
        type = type.toLowerCase();
        try {
            switch (type) {
                case "json":
                    summaryFuture = reportService.getBudgetSummary(financialYear, verified);
                    report = summaryFuture.get();
                    return new ResponseEntity<BudgetSummary>(report, HttpStatus.OK);

                case "csv":
                    summaryFuture = reportService.getBudgetSummary(financialYear, verified);
                    report = summaryFuture.get();
                    return new ResponseEntity<BudgetSummary>(report, HttpStatus.OK);
                case "pdf":
                    summaryFuture = reportService.getBudgetSummary(financialYear, verified);
                    report = summaryFuture.get();
                    return new ResponseEntity<BudgetSummary>(report, HttpStatus.OK);
                case "xlsx":
                    summaryFuture = reportService.getBudgetSummary(financialYear, verified);
                    report = summaryFuture.get();

                    reportList = report.getRows();

                    try (Workbook wb = new XSSFWorkbook()) {
                        XSSFSheet sheet = (XSSFSheet) wb.createSheet();

                        // Set the values for the table
                        XSSFRow row;
                        XSSFCell cell;
                        List<String> headersXLSX = Arrays.asList(
                                "Job Code",
                                "Fiscal Year",
                                "Description",
                                "Operating",
                                "Obligated",
                                "Balance"
                        );
                        
                        row = sheet.createRow(0);
                        for (int j = 0; j < 6; j++) {
                            cell = row.createCell(j);
                            cell.setCellValue(headersXLSX.get(j));
                                  
                        }
                        
                        for (int i = 1; i < reportList.size() + 1; i++) {
                            // Create row
                            row = sheet.createRow(i);
                            for (int j = 0; j < 6; j++) {
                                cell = row.createCell(j);
                                switch (j) {
                                    case 0:
                                        cell.setCellValue(reportList.get(i).getJobCode());
                                        break;
                                    case 1:
                                        cell.setCellValue(reportList.get(i).getFiscalYear());
                                        break;
                                    case 2:
                                        cell.setCellValue(reportList.get(i).getDescription());
                                        break;
                                    case 3:
                                        cell.setCellValue(reportList.get(i).getOperating());
                                        break;
                                    case 4:
                                        cell.setCellValue(reportList.get(i).getObligated());
                                        break;
                                    case 5:
                                        cell.setCellValue(reportList.get(i).getBalance());
                                        break;
                                }
                            }
                        }

                        XSSFCell totalsCell;
                        XSSFRow totalsRow = sheet.createRow(reportList.size()+ 1);

                        for (int j = 0; j < 6; j++) {
                            totalsCell = totalsRow.createCell(j);
                            switch (j) {
                                case 0:
                                    totalsCell.setCellValue("Totals");
                                    break;
                                case 1:
                                    totalsCell.setCellValue("");
                                    break;
                                case 2:
                                    totalsCell.setCellValue("");
                                    break;
                                case 3:
                                    totalsCell.setCellValue(report.getTotalOperating());
                                    break;
                                case 4:
                                    totalsCell.setCellValue(report.getTotalObligated());
                                    break;
                                case 5:
                                    totalsCell.setCellValue(report.getTotalBalance());
                                    break;
                            }
                        }

                        // Save
                        try (FileOutputStream fileOut = new FileOutputStream("budgetsummary.xlsx")) {
                            wb.write(fileOut);
                        }
                    }

                    String fileName = "budgetsummary.xlsx";

                    File file = new File(fileName);

                    MediaType mediaType = FileTypeDetector.getMediaTypeForFileName(this.servletContext, fileName);

                    InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

                    return ResponseEntity.ok()
                            // Content-Disposition
                            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + file.getName())
                            // Content-Type
                            .contentType(mediaType)
                            // Contet-Length
                            .contentLength(file.length()) //
                            .body(resource);

                default:
                    return new ResponseEntity(HttpStatus.BAD_REQUEST);
            }
        } catch (ExecutionException | InterruptedException ex) {
            Logger.getLogger(BudgetController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    /*
      InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

    return ResponseEntity.ok()
            .headers(headers)
            .contentLength(file.length())
            .contentType(MediaType.parseMediaType("application/octet-stream"))
            .body(resource);
     */
}
