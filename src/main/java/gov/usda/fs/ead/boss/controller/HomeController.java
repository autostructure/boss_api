package gov.usda.fs.ead.boss.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "redirect:/home";
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

    
    @RequestMapping("/empDash")
    public String empDash() {
        return "empDash";
    }

    
    @RequestMapping("/empPortal")
    public String empPortal() {
        return "empPortal";
    }

    
    @RequestMapping("/personnelDash")
    public String personnelDash() {
        return "personnelDash";
    }

    
    @RequestMapping("/viewAllEmployees")
    public String viewAllEmployees() {
        return "viewAllEmployees";
    }

    
    @RequestMapping("/addNewEmployee")
    public String addNewEmployee() {
        return "addNewEmployee";
    }

    
    @RequestMapping("/editEmployee/{nameCode}")
    public String editEmployee() {
        return "editEmployee";
    }

    
    @RequestMapping("/addTrainingEmployee")
    public String addTrainingEmployee() {
        return "addTrainingEmployee";
    }

    
    @RequestMapping("/addTrainingClass")
    public String addTrainingClass() {
        return "addTrainingClass";
    }

    
    @RequestMapping("/viewAllDras")
    public String viewAllDras() {
        return "viewAllDras";
    }

    
    @RequestMapping("/viewRecordedDras")
    public String viewRecordedDras() {
        return "viewRecordedDras";
    }

    
    @RequestMapping("/assignTraining")
    public String assignTraining() {
        return "assignTraining";
    }

    
    @RequestMapping("/viewTraining")
    public String viewTraining() {
        return "viewTraining";
    }

    
    @RequestMapping("/addDraEmployee")
    public String addDraEmployee() {
        return "addDraEmployee";
    }

    
    @RequestMapping("/payrollForecast")
    public String payrollForecast() {
        return "payrollForecast";
    }

    
    @RequestMapping("/unverifiedReport")
    public String unverifiedReport() {
        return "unverifiedReport";
    }

    
    @RequestMapping("/uploadTest")
    public String uploadTest() {
        return "uploadTest";
    }

    
    @RequestMapping("/fleetDash")
    public String fleetDash() {
        return "fleetDash";
    }

    
    @RequestMapping("/addNewFleet")
    public String addNewFleet() {
        return "addNewFleet";
    }

    
    @RequestMapping("/viewFleet")
    public String viewFleet() {
        return "viewFleet";
    }

    
    @RequestMapping("/viewEditFleet/{id}")
    public String viewEditFleet() {
        return "viewEditFleet";
    }

    
    @RequestMapping("/iwfia")
    public String iwfia() {
        return "iwfia";
    }

    
    @RequestMapping("/auxContact")
    public String auxContact() {
        return "auxContact";
    }

    
    @RequestMapping("/FleetMaintenaceList")
    public String FleetMaintenaceList() {
        return "FleetMaintenaceList";
    }

    
    @RequestMapping("/employeePrint")
    public String employeePrint() {
        return "employeePrint";
    }

    
    @RequestMapping("/print/{id}")
    public String print() {
        return "print";
    }

    
    @RequestMapping("/monthlyCosts")
    public String monthlyCosts() {
        return "monthlyCosts";
    }    
}
