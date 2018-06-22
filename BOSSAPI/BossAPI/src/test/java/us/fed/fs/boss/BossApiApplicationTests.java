package us.fed.fs.boss;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpPost;
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
import us.fed.fs.boss.model.JobCode;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.DEFINED_PORT)
public class BossApiApplicationTests {
    
    private static String baseUrl;
    
    static {
        baseUrl = "http://localhost:8090";
    }

    @Test
    public void jobCodes() {

        try {
            CloseableHttpClient client = HttpClients.createDefault();
            
            HttpPost httpPost = new HttpPost(baseUrl + "/jobCode");
            
            ObjectMapper objectMapper = new ObjectMapper();
            
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
            Assert.assertEquals(response.getStatusLine().getStatusCode(), 200);
            
            HttpDelete httpDelete = new HttpDelete(baseUrl + "/jobCode/" + saved.getId());
            CloseableHttpResponse delRes = client.execute(httpDelete);
            
            System.out.println("*****************************POST /jobCode/"+saved.getId()+" *****************************");
            Integer statusdel = delRes.getStatusLine().getStatusCode();
            System.out.println("delete returns https status: " + statusdel);
            System.out.println("****************************************************************************");
            Assert.assertEquals(response.getStatusLine().getStatusCode(), 200);
            
            client.close();
        } catch (IOException ex) {
            Logger.getLogger(BossApiApplicationTests.class.getName()).log(Level.SEVERE, null, ex);
            Assert.assertEquals(1, 0);
        }

    }

    @Test
    public void activityCodes() {

    }

    @Test
    public void budgetObjectCodes() {

    }

    @Test
    public void paymentCodes() {

    }

    @Test
    public void expenseCodes() {

    }

    @Test
    public void employeeProfiles() {

    }

    @Test
    public void expenses() {

    }

}
