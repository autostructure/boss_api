package us.fed.fs.boss;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "home";
    }

    @RequestMapping("/home")
    public String home2() {
        return "home";
    }

    @RequestMapping("/budgetDash")
    public String budgetDash() {
        return "budgetDash";
    }

    @RequestMapping("/budgetSummary")
    public String budgetSummary() {
        return "budgetSummary";
    }

    @RequestMapping("/jobCodes")
    public String jobCodes() {
        return "jobCodes";
    }

    @RequestMapping("/newExpense")
    public String newExpense() {
        return "newExpense";
    }

    @RequestMapping("/viewExpense")
    public String viewExpense() {
        return "viewExpense";
    }

    @RequestMapping("/payrollDetails")
    public String payrollDetails() {
        return "payrollDetails";
    }
    @RequestMapping("/newSalary")
    public String newSalary() {
        return "newSalary";
    }
    @RequestMapping("/empPortal")
    public String empPortal() {
        return "empPortal";
    }         
}
