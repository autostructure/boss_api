package us.fed.fs.boss;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
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
import us.fed.fs.boss.model.JobCode;
import us.fed.fs.boss.model.PaymentCode;

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

            ObjectMapper objectMapper = new ObjectMapper();
            // READ
            try (CloseableHttpClient client = HttpClients.createDefault()) {
                // READ
                HttpGet httpGet = new HttpGet(baseUrl + "/jobCode");
                httpGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getRes = client.execute(httpGet);
                HttpEntity getResEnt = getRes.getEntity();
                String responseStringGET = EntityUtils.toString(getResEnt, "UTF-8");
                Integer getstatus = getRes.getStatusLine().getStatusCode();
                System.out.println("*****************************GET /jobCode *********************************");
                System.out.println(getstatus);
                System.out.println("****************************************************************************");
                Assert.assertEquals(200, getstatus.intValue());
                List<JobCode> jobCodes = objectMapper.readValue(responseStringGET, List.class);

                Assert.assertTrue(jobCodes.size() > 0);

                // CREATE
                HttpPost httpPost = new HttpPost(baseUrl + "/jobCode");

                JobCode jobCode = new JobCode();
                jobCode.setJobCode("TESST123");
                jobCode.setAmount(BigDecimal.ONE);
                jobCode.setDescription("TEST JOBCODE");
                Short yr = 2018;
                jobCode.setFinancialYear(yr);
                jobCode.setOverrideCode(0);

                String postBody = objectMapper.writeValueAsString(jobCode);
                StringEntity entity = new StringEntity(postBody);
                httpPost.setEntity(entity);
                httpPost.setHeader("Accept", "application/json");
                httpPost.setHeader("Content-type", "application/json");
                CloseableHttpResponse response = client.execute(httpPost);
                HttpEntity httpres = response.getEntity();
                String responseString = EntityUtils.toString(httpres, "UTF-8");
                JobCode saved = objectMapper.readValue(responseString, JobCode.class);
                System.out.println("*****************************POST /jobCode *********************************");
                System.out.println(saved.getId());
                System.out.println("****************************************************************************");
                Assert.assertEquals(200, response.getStatusLine().getStatusCode());

                // UPDATE
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
                System.out.println("*****************************PUT /jobCode *********************************");
                System.out.println(putStatus);
                System.out.println("****************************************************************************");
                System.out.println();
                Assert.assertEquals(200, putStatus.intValue());

                // READ SINGLE AND ASSERT UPDATE WORKED
                HttpGet singleHttpGet = new HttpGet(baseUrl + "/jobCode/" + saved.getId());
                singleHttpGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse singleRes = client.execute(singleHttpGet);
                HttpEntity singleGetResEnt = singleRes.getEntity();
                String singleResponseStringGET = EntityUtils.toString(singleGetResEnt, "UTF-8");
                Integer singlegetstatus = singleRes.getStatusLine().getStatusCode();
                System.out.println();
                System.out.println("*****************************GET /jobCode/" + saved.getId() + " *********************************");
                System.out.println(singleResponseStringGET);
                System.out.println("****************************************************************************");
                System.out.println();
                Assert.assertEquals(200, singlegetstatus.intValue());
                JobCode updated = objectMapper.readValue(singleResponseStringGET, JobCode.class);

                Assert.assertTrue(updated.getDescription().equals("PutTested"));

                // DELETE
                HttpDelete httpDelete = new HttpDelete(baseUrl + "/jobCode/" + saved.getId());
                CloseableHttpResponse delRes = client.execute(httpDelete);
                System.out.println();
                System.out.println("*****************************DELETE /jobCode/" + saved.getId() + " *****************************");
                Integer statusdel = delRes.getStatusLine().getStatusCode();
                System.out.println("delete returns https status: " + statusdel);
                System.out.println("****************************************************************************");
                System.out.println();
                Assert.assertEquals(200, response.getStatusLine().getStatusCode());
            }
        } catch (IOException ex) {
            System.out.println(ex.getLocalizedMessage());
            Assert.assertTrue(false);
        }

    }

    @Test
    public void activityCodes() {
        try {

            ObjectMapper objectMapper = new ObjectMapper();
            // READ
            try (CloseableHttpClient client = HttpClients.createDefault()) {
                // READ
                HttpGet httpGet = new HttpGet(baseUrl + "/activityCode");
                httpGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getRes = client.execute(httpGet);
                HttpEntity getResEnt = getRes.getEntity();
                String responseStringGET = EntityUtils.toString(getResEnt, "UTF-8");
                Integer getstatus = getRes.getStatusLine().getStatusCode();
                System.out.println("*****************************GET /activityCode *********************************");
                System.out.println(getstatus);
                System.out.println("****************************************************************************");
                Assert.assertEquals(200, getstatus.intValue());
                List<ActivityCode> activityCodes = objectMapper.readValue(responseStringGET, List.class);

                Assert.assertTrue(activityCodes.size() > 0);
            }
        } catch (IOException ex) {
            System.out.println(ex.getLocalizedMessage());
            Assert.assertTrue(false);
        }
    }

    @Test
    public void budgetObjectCodes() {

        try {

            ObjectMapper objectMapper = new ObjectMapper();
            // READ
            try (CloseableHttpClient client = HttpClients.createDefault()) {
                // READ
                HttpGet httpGet = new HttpGet(baseUrl + "/budgetObjectCode");
                httpGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getRes = client.execute(httpGet);
                HttpEntity getResEnt = getRes.getEntity();
                String responseStringGET = EntityUtils.toString(getResEnt, "UTF-8");
                Integer getstatus = getRes.getStatusLine().getStatusCode();
                System.out.println("*****************************GET /budgetObjectCode *********************************");
                System.out.println(getstatus);
                System.out.println("****************************************************************************");
                Assert.assertEquals(200, getstatus.intValue());
                List<BudgetObjectCode> budgetObjectCodes = objectMapper.readValue(responseStringGET, List.class);

                Assert.assertTrue(budgetObjectCodes.size() > 0);
            }
        } catch (IOException ex) {
            System.out.println(ex.getLocalizedMessage());
            Assert.assertTrue(false);
        }
    }

    @Test
    public void paymentCodes() {

        try {

            ObjectMapper objectMapper = new ObjectMapper();
            // READ
            try (CloseableHttpClient client = HttpClients.createDefault()) {
                // READ
                HttpGet httpGet = new HttpGet(baseUrl + "/paymentCode");
                httpGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getRes = client.execute(httpGet);
                HttpEntity getResEnt = getRes.getEntity();
                String responseStringGET = EntityUtils.toString(getResEnt, "UTF-8");
                Integer getstatus = getRes.getStatusLine().getStatusCode();
                System.out.println("*****************************GET /paymentCode *********************************");
                System.out.println(getstatus);
                System.out.println("****************************************************************************");
                Assert.assertEquals(200, getstatus.intValue());
                List<PaymentCode> paymentCodes = objectMapper.readValue(responseStringGET, List.class);

                Assert.assertTrue(paymentCodes.size() > 0);
            }
        } catch (IOException ex) {
            System.out.println(ex.getLocalizedMessage());
            Assert.assertTrue(false);
        }
    }

    @Test
    public void expenseCodes() {

        try {

            ObjectMapper objectMapper = new ObjectMapper();
            // READ
            try (CloseableHttpClient client = HttpClients.createDefault()) {
                // READ
                HttpGet httpGet = new HttpGet(baseUrl + "/expenseCode");
                httpGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getRes = client.execute(httpGet);
                HttpEntity getResEnt = getRes.getEntity();
                String responseStringGET = EntityUtils.toString(getResEnt, "UTF-8");
                Integer getstatus = getRes.getStatusLine().getStatusCode();
                System.out.println("*****************************GET /expenseCode *********************************");
                System.out.println(getstatus);
                System.out.println("****************************************************************************");
                Assert.assertEquals(200, getstatus.intValue());
                List<ExpenseCode> expenseCodes = objectMapper.readValue(responseStringGET, List.class);

                Assert.assertTrue(expenseCodes.size() > 0);
            }
        } catch (IOException ex) {
            System.out.println(ex.getLocalizedMessage());
            Assert.assertTrue(false);
        }
    }

    @Test
    public void employeeProfiles() {

        try {

            ObjectMapper objectMapper = new ObjectMapper();
            // READ
            try (CloseableHttpClient client = HttpClients.createDefault()) {
                // READ
                HttpGet httpGet = new HttpGet(baseUrl + "/employeeProfile");
                httpGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getRes = client.execute(httpGet);
                HttpEntity getResEnt = getRes.getEntity();
                String responseStringGET = EntityUtils.toString(getResEnt, "UTF-8");
                Integer getstatus = getRes.getStatusLine().getStatusCode();
                System.out.println("*****************************GET /employeeProfile *********************************");
                System.out.println(getstatus);
                System.out.println("****************************************************************************");
                Assert.assertEquals(200, getstatus.intValue());
                List<EmployeeProfile> employeeProfiles = objectMapper.readValue(responseStringGET, List.class);

                Assert.assertTrue(employeeProfiles.size() > 0);
            }
        } catch (IOException ex) {
            System.out.println(ex.getLocalizedMessage());
            Assert.assertTrue(false);
        }
    }

    @Test
    public void expenses() {

        try {

            ObjectMapper objectMapper = new ObjectMapper();
            // READ
            try (CloseableHttpClient client = HttpClients.createDefault()) {
                // READ
                HttpGet httpGet = new HttpGet(baseUrl + "/expense");
                httpGet.setHeader("Content-type", "application/json");
                CloseableHttpResponse getRes = client.execute(httpGet);
                HttpEntity getResEnt = getRes.getEntity();
                String responseStringGET = EntityUtils.toString(getResEnt, "UTF-8");
                Integer getstatus = getRes.getStatusLine().getStatusCode();
                System.out.println("*****************************GET /expense *********************************");
                System.out.println(getstatus);
                System.out.println("****************************************************************************");
                Assert.assertEquals(200, getstatus.intValue());
                List<Expense> expenses = objectMapper.readValue(responseStringGET, List.class);

                // Assert.assertTrue(expenses.size() > 0);
            }
        } catch (IOException ex) {
            System.out.println(ex.getLocalizedMessage());
            Assert.assertTrue(false);
        }
    }

}
