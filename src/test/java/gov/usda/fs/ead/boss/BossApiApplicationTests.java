package gov.usda.fs.ead.boss;

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

import gov.usda.fs.ead.boss.model.ActivityCode;
import gov.usda.fs.ead.boss.model.BudgetObjectCode;
import gov.usda.fs.ead.boss.model.EmployeeProfile;
import gov.usda.fs.ead.boss.model.Expense;
import gov.usda.fs.ead.boss.model.ExpenseCode;
import gov.usda.fs.ead.boss.model.ExpenseDetail;
import gov.usda.fs.ead.boss.model.JobCode;
import gov.usda.fs.ead.boss.model.PaymentCode;
import gov.usda.fs.ead.boss.reports.BudgetSummary;
import gov.usda.fs.ead.boss.reports.BudgetSummaryRow;
import gov.usda.fs.ead.boss.reports.PayrollForecast;
import gov.usda.fs.ead.boss.reports.PayrollForecastRow;

//@RunWith(SpringRunner.class)
//@SpringBootTest(webEnvironment = WebEnvironment.DEFINED_PORT)
public class BossApiApplicationTests {

   

}
