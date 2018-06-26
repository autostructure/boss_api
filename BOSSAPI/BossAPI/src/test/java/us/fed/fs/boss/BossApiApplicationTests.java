package us.fed.fs.boss;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;
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
import us.fed.fs.boss.model.TravelDetail;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.DEFINED_PORT)
public class BossApiApplicationTests {

    private static final String baseUrl;

    static {
        baseUrl = "http://localhost:8090";
    }

    @Test
    public void jobCodes() {

        try {
            
            System.out.println("*********************************@Test***jobCodes()****************************");

            ObjectMapper objectMapper = new ObjectMapper();
            // READ
            try (CloseableHttpClient client = HttpClients.createDefault()) {

                // CREATE
                HttpPost httpPost = new HttpPost(baseUrl + "/jobCode");

                JobCode jobCode = new JobCode();
                jobCode.setJobCode("TESST123");
                jobCode.setAmount(BigDecimal.ONE);
                jobCode.setDescription("TEST JOBCODE");
                Short yr = 2018;
                jobCode.setFinancialYear(yr);
                jobCode.setOverrideCode(0);

                System.out.println();
                printBox("POST /jobCode" + " connecting...");
                System.out.println();

                String postBody = objectMapper.writeValueAsString(jobCode);
                StringEntity entity = new StringEntity(postBody);
                httpPost.setEntity(entity);
                httpPost.setHeader("Accept", "application/json");
                httpPost.setHeader("Content-type", "application/json");
                CloseableHttpResponse response = client.execute(httpPost);
                HttpEntity httpres = response.getEntity();
                String responseString = EntityUtils.toString(httpres, "UTF-8");
                JobCode saved = objectMapper.readValue(responseString, JobCode.class);
                System.out.println();
                printBox("POST /jobCode", saved.getId().toString());
                System.out.println();
                Assert.assertEquals(200, response.getStatusLine().getStatusCode());

                // UPDATE
                System.out.println();
                printBox("PUT /jobCode/" + saved.getId() + " connecting...");
                System.out.println();

                HttpPut httpPut = new HttpPut(baseUrl + "/jobCode/" + saved.getId());

                saved.setDescription("PutTested");

                String putBody = objectMapper.writeValueAsString(saved);
                StringEntity putEntity = new StringEntity(putBody);
                httpPut.setEntity(putEntity);
                httpPut.setHeader("Accept", "application/json");
                httpPut.setHeader("Content-type", "application/json");
                CloseableHttpResponse putResponse = client.execute(httpPut);
                Integer putStatus = putResponse.getStatusLine().getStatusCode();
                System.out.println();
                printBox("PUT /jobCode/" + saved.getId(), putStatus.toString());
                System.out.println();
                Assert.assertEquals(200, putStatus.intValue());

                // READ SINGLE AND ASSERT UPDATE WORKED
                System.out.println();
                printBox("GET /jobCode/" + saved.getId() + " connecting...");
                System.out.println();

                HttpGet singleHttpGet = new HttpGet(baseUrl + "/jobCode/" + saved.getId());
                singleHttpGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse singleRes = client.execute(singleHttpGet);
                HttpEntity singleGetResEnt = singleRes.getEntity();
                String singleResponseStringGET = EntityUtils.toString(singleGetResEnt, "UTF-8");
                Integer singlegetstatus = singleRes.getStatusLine().getStatusCode();
                System.out.println();
                printBox("GET /jobCode/" + saved.getId(), singlegetstatus.toString());
                System.out.println();
                Assert.assertEquals(200, singlegetstatus.intValue());
                JobCode updated = objectMapper.readValue(singleResponseStringGET, JobCode.class);

                Assert.assertTrue(updated.getDescription().equals("PutTested"));

                // DELETE
                System.out.println();
                printBox("DELETE /jobCode/" + saved.getId() + " connecting...");
                System.out.println();

                HttpDelete httpDelete = new HttpDelete(baseUrl + "/jobCode/" + saved.getId());
                CloseableHttpResponse delRes = client.execute(httpDelete);
                System.out.println();
                Integer statusdel = delRes.getStatusLine().getStatusCode();
                System.out.println();
                printBox("DELETE /jobCode/" + saved.getId(), statusdel.toString());
                System.out.println();
                System.out.println("**************************************************************************************");
                Assert.assertEquals(200, response.getStatusLine().getStatusCode());
            }
        } catch (IOException ex) {
            System.out.println(ex.getLocalizedMessage());
            Assert.assertTrue(false);
        }

    }

    @Test
    public void expenses() {

        try {

            System.out.println("*********************************@Test***expenses()****************************");


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
            ObjectMapper objectMapper = new ObjectMapper();
            
            Expense savedEXP = null;

            // READ
            try (CloseableHttpClient client = HttpClients.createDefault()) {
                // READ
                System.out.println();
                printBox("GET /expense connecting...");
                System.out.println();

                HttpGet httpGet = new HttpGet(baseUrl + "/expense");
                httpGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getRes = client.execute(httpGet);
                Integer getstatus = getRes.getStatusLine().getStatusCode();
                System.out.println();
                printBox("GET /expense", getstatus.toString());
                System.out.println();
                Assert.assertEquals(200, getstatus.intValue());

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
                httpGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getACRes = client.execute(httpACGet);
                HttpEntity getRCResEnt = getACRes.getEntity();
                String responseRCStringGET = EntityUtils.toString(getRCResEnt, "UTF-8");
                Integer getRCstatus = getACRes.getStatusLine().getStatusCode();
                Assert.assertEquals(200, getRCstatus.intValue());
                List<ActivityCode> activityCodes = objectMapper.readValue(responseRCStringGET, new TypeReference<List<ActivityCode>>() {
                });

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
                httpGet.setHeader("Content-type", "application/json");
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

                System.out.println(getPAYstatus);
                System.out.println();
                printBox("GET /paymentCode", getPAYstatus.toString());
                System.out.println();
                Assert.assertEquals(200, getstatus.intValue());

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
                expense.setTravelDetails(new ArrayList<TravelDetail>());
                String postEXPBody = objectMapper.writeValueAsString(expense);

                HttpPost httpEXPPost = new HttpPost(baseUrl + "/expense");
                System.out.println();
                printBox("POST /expense connecting...");
                System.out.println();
                StringEntity entityEXP = new StringEntity(postEXPBody);
                httpEXPPost.setEntity(entityEXP);
                httpEXPPost.setHeader("Accept", "application/json");
                httpEXPPost.setHeader("Content-type", "application/json");
                CloseableHttpResponse responseEXP = client.execute(httpEXPPost);
                HttpEntity httpres = responseEXP.getEntity();
                String responseEXPString = EntityUtils.toString(httpres, "UTF-8");
                savedEXP = objectMapper.readValue(responseEXPString, Expense.class);
                System.out.println(savedEXP.getId());

                System.out.println();
                printBox("POST /expense", savedEXP.getId().toString(), postEXPBody);
                System.out.println();

                Assert.assertEquals(200, responseEXP.getStatusLine().getStatusCode());

                // UPDATE
                System.out.println();
                printBox("PUT /expense connecting...");
                System.out.println();
                HttpPut httpPut = new HttpPut(baseUrl + "/expense/" + savedEXP.getId());
                savedEXP.setDescription("PutTested");
                String putBody = objectMapper.writeValueAsString(savedEXP);
                StringEntity putEntity = new StringEntity(putBody);
                httpPut.setEntity(putEntity);
                httpPut.setHeader("Accept", "application/json");
                httpPut.setHeader("Content-type", "application/json");
                CloseableHttpResponse putResponse = client.execute(httpPut);
                Integer putStatus = putResponse.getStatusLine().getStatusCode();
                System.out.println();
                printBox("PUT /expense", putStatus.toString(), putBody);
                System.out.println();
                Assert.assertEquals(200, putStatus.intValue());

            }

            // READ SINGLE AND ASSERT UPDATE WORKED
            // client 1 is failing here ridiculously.
            try (CloseableHttpClient client2 = HttpClients.createDefault()) {

                HttpGet singleHttpGet = new HttpGet(baseUrl + "/expense/" + savedEXP.getId());
                System.out.println();
                printBox("/expense/" + savedEXP.getId() + " connecting../");
                System.out.println();
                singleHttpGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse singleRes = client2.execute(singleHttpGet);
                System.out.println("executed...");
                HttpEntity singleGetResEnt = singleRes.getEntity();
                String singleResponseStringGET = EntityUtils.toString(singleGetResEnt, "UTF-8");
                Integer singlegetstatus = singleRes.getStatusLine().getStatusCode();
                System.out.println();
                printBox("/expense/" + savedEXP.getId(), singlegetstatus.toString());
                System.out.println();
                Assert.assertEquals(200, singlegetstatus.intValue());
                Expense updated = objectMapper.readValue(singleResponseStringGET, Expense.class);
                Assert.assertTrue(updated.getDescription().equals("PutTested"));
                
                // DELETE
                System.out.println();
                printBox("DELETE /expense/" + updated.getId() + " connecting...");
                System.out.println();

                HttpDelete httpDelete = new HttpDelete(baseUrl + "/expense/" + updated.getId());
                CloseableHttpResponse delRes = client2.execute(httpDelete);
                System.out.println();
                Integer statusdel = delRes.getStatusLine().getStatusCode();
                System.out.println();
                printBox("DELETE /expense/" + updated.getId(), statusdel.toString());
                System.out.println();
                Assert.assertEquals(200, delRes.getStatusLine().getStatusCode());
                
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
