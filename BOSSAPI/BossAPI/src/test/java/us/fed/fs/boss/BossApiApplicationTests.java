package us.fed.fs.boss;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.FileOutputStream;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;


import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.junit4.SpringRunner;

import us.fed.fs.boss.model.ActivityCode;
import us.fed.fs.boss.model.BudgetObjectCode;
import us.fed.fs.boss.model.EmployeeProfile;
import us.fed.fs.boss.model.Expense;
import us.fed.fs.boss.model.ExpenseCode;
import us.fed.fs.boss.model.ExpenseDetail;
import us.fed.fs.boss.model.JobCode;
import us.fed.fs.boss.model.PaymentCode;
import us.fed.fs.boss.reports.BudgetSummary;
import us.fed.fs.boss.reports.BudgetSummaryRow;
import us.fed.fs.boss.reports.PayrollForecast;
import us.fed.fs.boss.reports.PayrollForecastRow;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.DEFINED_PORT)
public class BossApiApplicationTests {

    private static final String baseUrl;

    static {
        baseUrl = "http://localhost:8090";
    }
    
     @Test
    public void summaryForecast() {
        
         System.out.println("****************************@Test***budgetReports()*********************************");

        printBox("Budget Summary 2017");

        Short fy = Short.parseShort("2017");

        ObjectMapper objectMapper = new ObjectMapper();

        try (CloseableHttpClient client = HttpClients.createDefault()) {

            HttpGet httpACGet = new HttpGet(baseUrl + "/payrollForecastReport/json/" + fy.toString() + "/all");
            httpACGet.setHeader("Content-type", "application/json");
            CloseableHttpResponse getACRes = client.execute(httpACGet);
            HttpEntity getRCResEnt = getACRes.getEntity();
            String responseRCStringGET = EntityUtils.toString(getRCResEnt, "UTF-8");
            Integer getRCstatus = getACRes.getStatusLine().getStatusCode();
            Assert.assertEquals(200, getRCstatus.intValue());
            PayrollForecast report = objectMapper.readValue(responseRCStringGET, new TypeReference<PayrollForecast>() {
            });

            List<PayrollForecastRow> reportList = report.getRows();
            Assert.assertTrue(reportList.size() > 0);
        } catch (Exception ex) {
            System.out.println("********************************ERROR********************************************");
            System.out.println(getStackTrace(ex));
            System.out.println("********************************/ERROR********************************************");
            Assert.assertTrue(false);
        }
        
    }

    @Test
    public void budgetReports() {

        /*
        
        TODO:
        goes by fiscalYeat
        generate 
        csv, excel, pdf
        
        1) budget summary
        Jobcode, FiscalYear, Description, Operating, Obligated, Balance(Operating Minus Obligated)
        goes by jobcode.
        
        
        
        2) salaries by fiscal year
        
        Jobcode Name, Seq No, Total, 
        Date Obligated, Pay period, Description, 
        Regular, OT, State, 
        Pymt code, Exp Code Amount, Date Verified
        
        3) salary projection
        4) salary by single pay period
        5) single items
        6) single jobcode
        7) all (Operating Minus Obligated)
        8) unverified (Operating Minus Obligated)
        
        
        /budgetSummaryReport/json/{financialYear}/{verified}
        
         */
        System.out.println("****************************@Test***budgetReports()*********************************");

        printBox("Budget Summary 2017");

        Short fy = Short.parseShort("2017");

        ObjectMapper objectMapper = new ObjectMapper();

        try (CloseableHttpClient client = HttpClients.createDefault()) {

            HttpGet httpACGet = new HttpGet(baseUrl + "/budgetSummaryReport/json/" + fy.toString() + "/all");
            httpACGet.setHeader("Content-type", "application/json");
            CloseableHttpResponse getACRes = client.execute(httpACGet);
            HttpEntity getRCResEnt = getACRes.getEntity();
            String responseRCStringGET = EntityUtils.toString(getRCResEnt, "UTF-8");
            Integer getRCstatus = getACRes.getStatusLine().getStatusCode();
            Assert.assertEquals(200, getRCstatus.intValue());
            BudgetSummary report = objectMapper.readValue(responseRCStringGET, new TypeReference<BudgetSummary>() {
            });

            List<BudgetSummaryRow> reportList = report.getRows();

            // JSON Report
            String reportJSON = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(report);
            printBox("JSON");
            System.out.println(reportJSON);

            StringBuilder csvsb = new StringBuilder();
            String newline = "\r\n";

            // CSV Report
            String headers = String.join(",", Arrays.asList(
                    "Job Code",
                    "Fiscal Year",
                    "Description",
                    "Operating",
                    "Obligated",
                    "Balance"
            ));
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

            printBox("CSV");
            System.out.println(csvsb.toString());
            System.out.println();

            printBox("Excel File Test");
            
            HttpGet httpXLSGet = new HttpGet(baseUrl + "/budgetSummaryReport/xlsx/" + fy.toString() + "/all");
            httpXLSGet.setHeader("Content-type", "application/json");
            CloseableHttpResponse getXLSRes = client.execute(httpXLSGet);
            HttpEntity getXLSResEnt = getXLSRes.getEntity();

            
            Integer getXLSstatus = getXLSRes.getStatusLine().getStatusCode();
                        
            printBox(baseUrl + "/budgetSummaryReport/xlsx/" + fy.toString() + "/all", getXLSstatus.toString());
            Assert.assertEquals(200, getXLSstatus.intValue());
            
            InputStream is = getXLSResEnt.getContent();
            String filePath = "sampledownloaded.xlsx";
            FileOutputStream fos = new FileOutputStream(new File(filePath));
            int inByte;
            while((inByte = is.read()) != -1)
                 fos.write(inByte);
            is.close();
            fos.close();
            
            File downloaded = new File(filePath);
            
            Assert.assertTrue(downloaded.exists());
            
            
            
            // PDF
            
            printBox("Test PDF BudgetReport");
            
            
            HttpGet httpPDFGet = new HttpGet(baseUrl + "/budgetSummaryReport/pdf/" + fy.toString() + "/all");
            httpPDFGet.setHeader("Content-type", "application/json");
            CloseableHttpResponse getPDFRes = client.execute(httpPDFGet);
            HttpEntity getPDFResEnt = getPDFRes.getEntity();

            
            Integer getPDFstatus = getPDFRes.getStatusLine().getStatusCode();
                        
            printBox(baseUrl + "/budgetSummaryReport/pdf/" + fy.toString() + "/all", getPDFstatus.toString());
            Assert.assertEquals(200, getPDFstatus.intValue());
            
            InputStream isPDF = getPDFResEnt.getContent();
            String filePathPDF = "sampledownloaded.pdf";
            FileOutputStream fosPDF = new FileOutputStream(new File(filePathPDF));
            int inBytePDF;
            while((inBytePDF = isPDF.read()) != -1)
                 fosPDF.write(inBytePDF);
            is.close();
            fosPDF.close();
            
            File downloadedPDF = new File(filePathPDF);
            
            Assert.assertTrue(downloadedPDF.exists());
            
            
            
             printBox("Test CSV BudgetReport");
            
            
            HttpGet httpCSVGet = new HttpGet(baseUrl + "/budgetSummaryReport/csv/" + fy.toString() + "/all");
            httpCSVGet.setHeader("Content-type", "application/json");
            CloseableHttpResponse getCSVRes = client.execute(httpCSVGet);
            HttpEntity getCSVResEnt = getCSVRes.getEntity();

            
            Integer getCSVstatus = getCSVRes.getStatusLine().getStatusCode();
                        
            printBox(baseUrl + "/budgetSummaryReport/csv/" + fy.toString() + "/all", getCSVstatus.toString());
            Assert.assertEquals(200, getCSVstatus.intValue());
            
            InputStream isCSV = getCSVResEnt.getContent();
            String filePathCSV = "sampledownloaded.csv";
            FileOutputStream fosCSV = new FileOutputStream(new File(filePathCSV));
            int inByteCSV;
            while((inByteCSV = isCSV.read()) != -1)
                 fosCSV.write(inByteCSV);
            is.close();
            fosCSV.close();
            
            File downloadedCSV = new File(filePathCSV);
            
            Assert.assertTrue(downloadedCSV.exists());
            

        } catch (Exception ex) {
            System.out.println("********************************ERROR********************************************");
            System.out.println(getStackTrace(ex));
            System.out.println("********************************/ERROR********************************************");
            Assert.assertTrue(false);
        }

        System.out.println("************************************************************************************");

    }

    @Test
    public void budget() {

        try {

            System.out.println("*********************************@Test***budget()*********************************");
            ObjectMapper objectMapper = new ObjectMapper();
            // READ
            try (CloseableHttpClient client = HttpClients.createDefault()) {

                // CREATE
                HttpPost httpJCPost = new HttpPost(baseUrl + "/jobCode");

                JobCode jobCode = new JobCode();
                jobCode.setJobCode("TESST123");
                jobCode.setAmount(BigDecimal.ONE);
                jobCode.setDescription("TEST JOBCODE");
                Short jyr = 2018;
                jobCode.setFinancialYear(jyr);
                jobCode.setOverrideCode(0);

                System.out.println();
                printBox("POST /jobCode" + " connecting...");
                System.out.println();

                String postJCBody = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(jobCode);
                StringEntity entityJC = new StringEntity(postJCBody);
                httpJCPost.setEntity(entityJC);
                httpJCPost.setHeader("Accept", "application/json");
                httpJCPost.setHeader("Content-type", "application/json");
                CloseableHttpResponse responseJC = client.execute(httpJCPost);
                HttpEntity httpresJC = responseJC.getEntity();
                String responseStringJC = EntityUtils.toString(httpresJC, "UTF-8");
                httpJCPost.releaseConnection();
                JobCode savedJC = objectMapper.readValue(responseStringJC, JobCode.class);
                System.out.println();
                printBox("POST /jobCode", savedJC.getId().toString());
                printBox(responseStringJC);
                System.out.println();
                Assert.assertEquals(200, responseJC.getStatusLine().getStatusCode());

                // UPDATE
                System.out.println();
                printBox("PUT /jobCode/" + savedJC.getId() + " connecting...");
                System.out.println();

                HttpPut httpPutJC = new HttpPut(baseUrl + "/jobCode/" + savedJC.getId());

                savedJC.setDescription("PutTested");

                String putBodyJC = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(savedJC);
                StringEntity putEntityJC = new StringEntity(putBodyJC);
                httpPutJC.setEntity(putEntityJC);
                httpPutJC.setHeader("Accept", "application/json");
                httpPutJC.setHeader("Content-type", "application/json");
                CloseableHttpResponse putResponseJC = client.execute(httpPutJC);
                Integer putStatusJC = putResponseJC.getStatusLine().getStatusCode();
                httpPutJC.releaseConnection();
                System.out.println();
                printBox("PUT /jobCode/" + savedJC.getId(), putStatusJC.toString());
                System.out.println();
                Assert.assertEquals(200, putStatusJC.intValue());

                // READ SINGLE AND ASSERT UPDATE WORKED
                System.out.println();
                printBox("GET /jobCode/" + savedJC.getId() + " connecting...");
                System.out.println();

                HttpGet singleHttpGetJC = new HttpGet(baseUrl + "/jobCode/" + savedJC.getId());
                singleHttpGetJC.setHeader("Content-type", "application/json");
                CloseableHttpResponse singleResJC = client.execute(singleHttpGetJC);
                HttpEntity singleGetResEntjc = singleResJC.getEntity();
                String singleResponseStringGETJC = EntityUtils.toString(singleGetResEntjc, "UTF-8");
                Integer singlegetstatusJC = singleResJC.getStatusLine().getStatusCode();
                singleHttpGetJC.releaseConnection();
                System.out.println();
                printBox("GET /jobCode/" + savedJC.getId(), singlegetstatusJC.toString());
                System.out.println();
                Assert.assertEquals(200, singlegetstatusJC.intValue());
                JobCode updated = objectMapper.readValue(singleResponseStringGETJC, JobCode.class);

                Assert.assertTrue(updated.getDescription().equals("PutTested"));

                // DELETE
                System.out.println();
                printBox("DELETE /jobCode/" + savedJC.getId() + " connecting...");
                System.out.println();

                HttpDelete httpDeleteJC = new HttpDelete(baseUrl + "/jobCode/" + savedJC.getId());
                CloseableHttpResponse delResJC = client.execute(httpDeleteJC);
                System.out.println();
                Integer statusdelJC = delResJC.getStatusLine().getStatusCode();
                System.out.println();
                printBox("DELETE /jobCode/" + savedJC.getId(), statusdelJC.toString());
                System.out.println();
                System.out.println("**************************************************************************************");
                httpDeleteJC.releaseConnection();
                Assert.assertEquals(200, statusdelJC.intValue());


                /*
                Expenditure test #1
                create salary off jcode (2017, 'FRFI4717', 'LAB (FRRE4717)', 508341)
                
                any rando existing namecode for employee
                x activity code ('MSO', 'MSO')? idk the actcode for salaries
                x payment code ('SAL', 'Salaries')
                (in expense details) expense code (8, 'Base Salaries') or (9, 'Overtime')
                x budget object code (11, 'Salaries')
                x employee profile any integer (0,50]
                 */
                //Expense savedEXP = null;
                // READ
                System.out.println();
                printBox("GET /expense connecting...");
                System.out.println();

                HttpGet httpEXPGet = new HttpGet(baseUrl + "/expense");
                httpEXPGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getResEXP = client.execute(httpEXPGet);
                Integer getstatusEXP = getResEXP.getStatusLine().getStatusCode();
                System.out.println();
                printBox("GET /expense", getstatusEXP.toString());
                System.out.println();
                httpEXPGet.releaseConnection();
                Assert.assertEquals(200, getstatusEXP.intValue());

                // CREATE
                Expense expense = new Expense();

                expense.setDescription("expense_test_1");
                Short yr = 2017;
                expense.setFinancialYear(yr);
                expense.setState("UT");

                // READ ACTIVITY CODES
                System.out.println();
                printBox("GET /activityCode connecting...");
                System.out.println();

                HttpGet httpACGet = new HttpGet(baseUrl + "/activityCode");
                httpACGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getACRes = client.execute(httpACGet);
                HttpEntity getRCResEnt = getACRes.getEntity();
                String responseRCStringGET = EntityUtils.toString(getRCResEnt, "UTF-8");
                Integer getRCstatus = getACRes.getStatusLine().getStatusCode();
                Assert.assertEquals(200, getRCstatus.intValue());
                List<ActivityCode> activityCodes = objectMapper.readValue(responseRCStringGET, new TypeReference<List<ActivityCode>>() {
                });

                httpACGet.releaseConnection();

                System.out.println();
                printBox("GET /activityCode", getRCstatus.toString());
                System.out.println();

                Optional<ActivityCode> ac = activityCodes.stream()
                        .filter(x -> "MSO".equals(x.getCode()))
                        .findFirst();

                // set expense code
                expense.setActivityCode(ac.get());

                // READ PAYMENT CODES
                System.out.println();
                printBox("GET /paymentCode connecting...");
                System.out.println();

                HttpGet httpPAYGet = new HttpGet(baseUrl + "/paymentCode");
                httpPAYGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getPAYRes = client.execute(httpPAYGet);
                HttpEntity getPAYResEnt = getPAYRes.getEntity();
                String responsePAYStringGET = EntityUtils.toString(getPAYResEnt, "UTF-8");
                Integer getPAYstatus = getPAYRes.getStatusLine().getStatusCode();
                Assert.assertEquals(200, getPAYstatus.intValue());
                List<PaymentCode> paymentCodes = objectMapper.readValue(responsePAYStringGET, new TypeReference<List<PaymentCode>>() {
                });
                PaymentCode pc = paymentCodes.stream()
                        .filter(x -> "SAL".equals(x.getCode()))
                        .findFirst().get();

                httpPAYGet.releaseConnection();

                System.out.println(getPAYstatus);
                System.out.println();
                printBox("GET /paymentCode", getPAYstatus.toString());
                System.out.println();
                Assert.assertEquals(200, getPAYstatus.intValue());

                // set payment code
                expense.setPaymentCode(pc);

                // READ /expenseCode
                System.out.println();
                printBox("GET /expenseCode connecting...");
                System.out.println();
                HttpGet httpEXCGet = new HttpGet(baseUrl + "/expenseCode");
                httpEXCGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getEXCRes = client.execute(httpEXCGet);
                HttpEntity getEXCResEnt = getEXCRes.getEntity();
                String responseEXCStringGET = EntityUtils.toString(getEXCResEnt, "UTF-8");
                Integer getEXCstatus = getEXCRes.getStatusLine().getStatusCode();
                System.out.println();
                printBox("GET /expenseCode", getEXCstatus.toString());
                System.out.println();
                Assert.assertEquals(200, getEXCstatus.intValue());
                httpEXCGet.releaseConnection();
                List<ExpenseCode> expenseCodes = objectMapper.readValue(responseEXCStringGET, new TypeReference<List<ExpenseCode>>() {
                });

                Assert.assertTrue(expenseCodes.size() > 0);

                // expense code for expense details;
                List<ExpenseCode> expc = expenseCodes.stream()
                        .filter(x -> Long.valueOf(8).equals(x.getId()) || Long.valueOf(9).equals(x.getId()))
                        .collect(Collectors.toList());

                // READ /budgetObjectCode
                System.out.println();
                printBox("GET /budgetObjectCode connecting...");
                System.out.println();
                HttpGet httpBOCGet = new HttpGet(baseUrl + "/budgetObjectCode");
                httpBOCGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getBOCRes = client.execute(httpBOCGet);
                HttpEntity getBOCResEnt = getBOCRes.getEntity();
                String responseBOCStringGET = EntityUtils.toString(getBOCResEnt, "UTF-8");
                Integer getBOCstatus = getBOCRes.getStatusLine().getStatusCode();
                System.out.println();
                printBox("GET /budgetObjectCode", getBOCstatus.toString());
                System.out.println();
                Assert.assertEquals(200, getBOCstatus.intValue());
                httpBOCGet.releaseConnection();
                List<BudgetObjectCode> budgetObjectCodes = objectMapper.readValue(responseBOCStringGET, new TypeReference<List<BudgetObjectCode>>() {
                });

                Assert.assertTrue(budgetObjectCodes.size() > 0);

                BudgetObjectCode boj = budgetObjectCodes.stream()
                        .filter(x -> Long.valueOf(11).equals(x.getId()))
                        .findFirst().get();

                expense.setBudgetObjectCode(boj);

                // READ /employeeProfile
                HttpGet httpEMPGet = new HttpGet(baseUrl + "/employeeProfile");
                System.out.println();
                printBox("GET /employeeProfile connecting...");
                System.out.println();
                httpEMPGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getEMPRes = client.execute(httpEMPGet);
                HttpEntity getResEMPEnt = getEMPRes.getEntity();
                String responseEMPStringGET = EntityUtils.toString(getResEMPEnt, "UTF-8");
                Integer getEMPstatus = getEMPRes.getStatusLine().getStatusCode();
                System.out.println(getEMPstatus);

                System.out.println();
                printBox("GET /employeeProfile", getEMPstatus.toString());
                System.out.println();
                httpEMPGet.releaseConnection();

                Assert.assertEquals(200, getEMPstatus.intValue());
                List<EmployeeProfile> employeeProfiles = objectMapper.readValue(responseEMPStringGET, new TypeReference<List<EmployeeProfile>>() {
                });

                Assert.assertTrue(employeeProfiles.size() > 0);

                expense.setEmployeeProfile(employeeProfiles.get(14));

                expense.setPayPeriod(2); // ? does pay period go here??

                ExpenseCode regularTime = null;
                ExpenseCode overTime = null;

                for (ExpenseCode code : expc) {
                    if (code.getId() == 8) {
                        regularTime = code;
                    }
                    if (code.getId() == 9) {
                        overTime = code;
                    }
                }

                // READ /jobCode
                System.out.println();
                printBox("GET /jobCode connecting...");
                System.out.println();
                HttpGet httpJCGet = new HttpGet(baseUrl + "/jobCode");
                httpJCGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getJCRes = client.execute(httpJCGet);
                HttpEntity getResJCEnt = getJCRes.getEntity();
                String responseJCStringGET = EntityUtils.toString(getResJCEnt, "UTF-8");
                Integer getJCstatus = getJCRes.getStatusLine().getStatusCode();
                System.out.println();
                printBox("GET /jobCode", getJCstatus.toString());
                System.out.println();
                Assert.assertEquals(200, getJCstatus.intValue());
                List<JobCode> jobCodes = objectMapper.readValue(responseJCStringGET, new TypeReference<List<JobCode>>() {
                });

                httpJCGet.releaseConnection();

                // create salary off jcode (2017, 'FRFI4717', 'LAB (FRRE4717)', 508341)
                JobCode jc = jobCodes.stream()
                        .filter(x -> "FRFI4717".equals(x.getJobCode()))
                        .findFirst().get();

                Assert.assertTrue(jobCodes.size() > 0);

                // put in expense details and sum up the total.
                ExpenseDetail detail1 = new ExpenseDetail();
                detail1.setExpenseCode(regularTime);
                detail1.setHours(40);
                detail1.setVerified(false);
                detail1.setAmount(new BigDecimal(1000.00f));
                // detail1.setDateVerified(new Date());
                detail1.setJobCode(jc);

                // put in expense details and sum up the total.
                ExpenseDetail detail2 = new ExpenseDetail();
                detail2.setExpenseCode(regularTime);
                detail2.setHours(40);
                detail2.setVerified(false);
                detail2.setAmount(new BigDecimal(1000.00f));
                // detail2.setDateVerified(new Date());
                detail2.setJobCode(jc);

                // put in expense details and sum up the total.
                ExpenseDetail detail3 = new ExpenseDetail();
                detail3.setExpenseCode(overTime);
                detail3.setHours(10);
                detail3.setVerified(false);
                detail3.setAmount(new BigDecimal(150.00f));
                // detail3.setDateVerified(new Date());
                detail3.setJobCode(jc);

                List<ExpenseDetail> dts = new ArrayList<>();
                dts.add(detail1);
                dts.add(detail2);
                dts.add(detail3);

                expense.setExpenseDetails(dts);
                String postEXPBody = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(expense);

                HttpPost httpEXPPost = new HttpPost(baseUrl + "/expense");
                System.out.println();
                printBox("POST /expense connecting...");
                System.out.println();
                StringEntity entityEXP = new StringEntity(postEXPBody);
                httpEXPPost.setEntity(entityEXP);
                httpEXPPost.setHeader("Accept", "application/json");
                httpEXPPost.setHeader("Content-type", "application/json");
                CloseableHttpResponse responseEXP = client.execute(httpEXPPost);
                HttpEntity httpEXPres = responseEXP.getEntity();
                String responseEXPString = EntityUtils.toString(httpEXPres, "UTF-8");
                Expense savedEXP = objectMapper.readValue(responseEXPString, Expense.class);

                httpEXPPost.releaseConnection();

                System.out.println();
                printBox("POST /expense", savedEXP.getId().toString());
                System.out.println(postEXPBody);
                System.out.println();

                Assert.assertEquals(200, responseEXP.getStatusLine().getStatusCode());

                // UPDATE
                System.out.println();
                printBox("PUT /expense connecting...");
                System.out.println();
                HttpPut httphttpEXPresPut = new HttpPut(baseUrl + "/expense/" + savedEXP.getId());
                savedEXP.setDescription("PutTested");
                String httpEXPGres = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(savedEXP);
                StringEntity puthttpEXPresEntity = new StringEntity(httpEXPGres);
                httphttpEXPresPut.setEntity(puthttpEXPresEntity);
                httphttpEXPresPut.setHeader("Accept", "application/json");
                httphttpEXPresPut.setHeader("Content-type", "application/json");
                CloseableHttpResponse putEXPResponse = client.execute(httphttpEXPresPut);
                Integer putEXPStatus = putEXPResponse.getStatusLine().getStatusCode();
                System.out.println();
                printBox("PUT /expense", putEXPStatus.toString());
                System.out.println(httpEXPGres);
                System.out.println();
                Assert.assertEquals(200, putEXPStatus.intValue());

                httphttpEXPresPut.releaseConnection();

                // READ SINGLE AND ASSERT UPDATE WORKED
                // client 1 is failing here ridiculously.
                HttpGet singleEXPHttpGet = new HttpGet(baseUrl + "/expense/" + savedEXP.getId());
                System.out.println();
                printBox("/expense/" + savedEXP.getId() + " connecting../");
                System.out.println();
                singleEXPHttpGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse singleEXPRes = client.execute(singleEXPHttpGet);
                System.out.println("executed...");
                HttpEntity singleEXPGetResEnt = singleEXPRes.getEntity();
                String singleEXPResponseStringGET = EntityUtils.toString(singleEXPGetResEnt, "UTF-8");
                Integer singleEXPgetstatus = singleEXPRes.getStatusLine().getStatusCode();
                System.out.println();
                printBox("/expense/" + savedEXP.getId(), singleEXPgetstatus.toString());
                System.out.println();
                Assert.assertEquals(200, singleEXPgetstatus.intValue());
                Expense updatedEXP = objectMapper.readValue(singleEXPResponseStringGET, Expense.class);
                Assert.assertTrue(updatedEXP.getDescription().equals("PutTested"));

                singleEXPHttpGet.releaseConnection();

                // DELETE
                System.out.println();
                printBox("DELETE /expense/" + updated.getId() + " connecting...");
                System.out.println();

                HttpDelete httpEXPDelete = new HttpDelete(baseUrl + "/expense/" + updatedEXP.getId());
                CloseableHttpResponse delEXPRes = client.execute(httpEXPDelete);
                System.out.println();
                Integer statusEXPdel = delEXPRes.getStatusLine().getStatusCode();
                System.out.println();
                printBox("DELETE /expense/" + updatedEXP.getId(), statusEXPdel.toString());
                System.out.println();
                Assert.assertEquals(200, delEXPRes.getStatusLine().getStatusCode());

                httpEXPDelete.releaseConnection();

                System.out.println("**************************************************************************************");

            }

        } catch (IOException ex) {
            System.out.println("********************************ERROR********************************************");
            System.out.println(getStackTrace(ex));
            System.out.println("********************************/ERROR********************************************");
            Assert.assertTrue(false);
        }

    }

    String getStackTrace(final Throwable throwable) {
        final StringWriter sw = new StringWriter();
        final PrintWriter pw = new PrintWriter(sw, true);
        throwable.printStackTrace(pw);
        return sw.getBuffer().toString();
    }

    public void printBox(String... strings) {
        int maxBoxWidth = getMaxLength(strings);
        String line = "+" + fill('-', maxBoxWidth + 2) + "+";
        System.out.println(line);
        for (String str : strings) {
            System.out.printf("| %s |%n", padString(str, maxBoxWidth));
        }
        System.out.println(line);
    }

    private String fill(char ch, int len) {
        StringBuilder sb = new StringBuilder(len);
        for (int i = 0; i < len; i++) {
            sb.append(ch);
        }
        return sb.toString();
    }

    private String padString(String str, int len) {
        StringBuilder sb = new StringBuilder(str);
        return sb.append(fill(' ', len - str.length())).toString();
    }

    private static int getMaxLength(String... strings) {
        int len = Integer.MIN_VALUE;
        for (String str : strings) {
            len = Math.max(str.length(), len);
        }
        return len;
    }

}
