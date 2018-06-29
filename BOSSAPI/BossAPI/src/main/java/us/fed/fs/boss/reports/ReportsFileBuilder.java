package us.fed.fs.boss.reports;

import be.quodlibet.boxable.BaseTable;
import be.quodlibet.boxable.datatable.DataTable;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ReportsFileBuilder {
    
    public enum FileType {CSV, XLSX, PDF};
    
    private FileType fileType;
    
    public ReportsFileBuilder(FileType fileType) {
        this.fileType = fileType;
    }
    
    public File getBudgetSummary(BudgetSummary report) throws FileNotFoundException, IOException {
        
        List<BudgetSummaryRow> reportList = report.getRows();
        
        List<String> headers = Arrays.asList(
                "Job Code",
                "Fiscal Year",
                "Description",
                "Operating",
                "Obligated",
                "Balance"
        );
        
          switch (this.fileType) {

                case CSV:
                    
                    StringBuilder csvsb = new StringBuilder();
                    String newline = "\r\n";

                    // CSV Report
                    csvsb.append(headers).append(newline);

                    for (BudgetSummaryRow summaryRow : reportList) {
                        String csvrow = String.join(",", Arrays.asList(
                                summaryRow.getJobCode(),
                                summaryRow.getFiscalYear(),
                                summaryRow.getDescription(),
                                summaryRow.getOperating(),
                                summaryRow.getObligated(),
                                summaryRow.getBalance()
                        ));
                        csvsb.append(csvrow).append(newline);
                    }

                    String csvrow = String.join(",", Arrays.asList(
                            "Totals",
                            "",
                            "",
                            report.getTotalOperating(),
                            report.getTotalObligated(),
                            report.getTotalBalance()
                    ));
                    csvsb.append(csvrow).append(newline);

                    String fileNameCSV = "budgetsummary.csv";

                    try (PrintWriter out = new PrintWriter(fileNameCSV)) {
                        out.println(csvsb.toString());
                    }

                    File fileCSV = new File(fileNameCSV);
                    
                    return fileCSV;
                    
                case PDF:

                    //Initialize Document
                    PDDocument doc = new PDDocument();
                    PDPage page = new PDPage();
                    doc.addPage(page);

                    //Initialize table
                    float margin = 10;
                    float tableWidth = page.getMediaBox().getWidth() - (2 * margin);
                    float yStartNewPage = page.getMediaBox().getHeight() - (2 * margin);
                    float yStart = yStartNewPage;
                    float bottomMargin = 0;

                    BaseTable dataTable = new BaseTable(yStart, yStartNewPage, bottomMargin, tableWidth, margin, doc, page, true,
                            true);

                    DataTable t = new DataTable(dataTable, page);

                    List<List> pdfdata = new ArrayList<>();
                    pdfdata.add(headers);

                    report.getRows().forEach(r -> {
                        List<String> rl = new ArrayList<>();

                        rl.add(r.getJobCode());
                        rl.add(r.getFiscalYear());
                        rl.add(r.getDescription());
                        rl.add(r.getOperating());
                        rl.add(r.getObligated());
                        rl.add(r.getBalance());

                        pdfdata.add(rl);
                    });

                    List<String> totals = new ArrayList<>();

                    totals.add("Totals");
                    totals.add("");
                    totals.add("");
                    totals.add(report.getTotalOperating());
                    totals.add(report.getTotalObligated());
                    totals.add(report.getTotalBalance());

                    pdfdata.add(totals);

                    t.addListToTable(pdfdata, true);

                    dataTable.draw();
                    File pdf = new File("budgetsummary.pdf");
                    System.out.println("Sample file saved at : " + pdf.getAbsolutePath());

                    // Files.createParentDirs(file);
                    doc.save(pdf);
                    doc.close();
                    
                    return pdf;

                case XLSX:

                    try (Workbook wb = new XSSFWorkbook()) {
                        XSSFSheet sheet = (XSSFSheet) wb.createSheet();

                        // Set the values for the table
                        XSSFRow row;
                        XSSFCell cell;

                        row = sheet.createRow(0);
                        for (int j = 0; j < 6; j++) {
                            cell = row.createCell(j);
                            cell.setCellValue(headers.get(j));

                        }

                        for (int i = 0; i < reportList.size(); i++) {
                            // Create row
                            row = sheet.createRow(i + 1);
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
                        XSSFRow totalsRow = sheet.createRow(reportList.size() + 1);

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
                    return file;
            }
        
        
        
        return null;
    }
    
}
