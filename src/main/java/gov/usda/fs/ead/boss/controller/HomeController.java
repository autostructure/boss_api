package gov.usda.fs.ead.boss.controller;

import gov.usda.fs.ead.boss.auth.IsAppUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "redirect:/home";
    }

    @IsAppUser
    @RequestMapping("/home")
    public String home2() {
        return "home";
    }

    @IsAppUser
    @RequestMapping("/budgetDash")
    public String budgetDash() {
        return "budgetDash";
    }

    @IsAppUser
    @RequestMapping("/budgetSummary")
    public String budgetSummary() {
        return "budgetSummary";
    }

    @IsAppUser
    @RequestMapping("/jobCodes")
    public String jobCodes() {
        return "jobCodes";
    }

    @IsAppUser
    @RequestMapping("/newExpense")
    public String newExpense() {
        return "newExpense";
    }

    @IsAppUser
    @RequestMapping("/viewExpense")
    public String viewExpense() {
        return "viewExpense";
    }

    @IsAppUser
    @RequestMapping("/payrollDetails")
    public String payrollDetails() {
        return "payrollDetails";
    }

    @IsAppUser
    @RequestMapping("/newSalary")
    public String newSalary() {
        return "newSalary";
    }

    @IsAppUser
    @RequestMapping("/empDash")
    public String empDash() {
        return "empDash";
    }

    @IsAppUser
    @RequestMapping("/empPortal")
    public String empPortal() {
        return "empPortal";
    }

    @IsAppUser
    @RequestMapping("/personnelDash")
    public String personnelDash() {
        return "personnelDash";
    }

    @IsAppUser
    @RequestMapping("/viewAllEmployees")
    public String viewAllEmployees() {
        return "viewAllEmployees";
    }

    @IsAppUser
    @RequestMapping("/addNewEmployee")
    public String addNewEmployee() {
        return "addNewEmployee";
    }

    @IsAppUser
    @RequestMapping("/editEmployee/{nameCode}")
    public String editEmployee() {
        return "editEmployee";
    }

    @IsAppUser
    @RequestMapping("/addTrainingEmployee")
    public String addTrainingEmployee() {
        return "addTrainingEmployee";
    }

    @IsAppUser
    @RequestMapping("/addTrainingClass")
    public String addTrainingClass() {
        return "addTrainingClass";
    }

    @IsAppUser
    @RequestMapping("/viewAllDras")
    public String viewAllDras() {
        return "viewAllDras";
    }

    @IsAppUser
    @RequestMapping("/viewRecordedDras")
    public String viewRecordedDras() {
        return "viewRecordedDras";
    }

    @IsAppUser
    @RequestMapping("/assignTraining")
    public String assignTraining() {
        return "assignTraining";
    }

    @IsAppUser
    @RequestMapping("/viewTraining")
    public String viewTraining() {
        return "viewTraining";
    }

    @IsAppUser
    @RequestMapping("/addDraEmployee")
    public String addDraEmployee() {
        return "addDraEmployee";
    }

    @IsAppUser
    @RequestMapping("/payrollForecast")
    public String payrollForecast() {
        return "payrollForecast";
    }

    @IsAppUser
    @RequestMapping("/unverifiedReport")
    public String unverifiedReport() {
        return "unverifiedReport";
    }

    @IsAppUser
    @RequestMapping("/uploadTest")
    public String uploadTest() {
        return "uploadTest";
    }

    @IsAppUser
    @RequestMapping("/fleetDash")
    public String fleetDash() {
        return "fleetDash";
    }

    @IsAppUser
    @RequestMapping("/addNewFleet")
    public String addNewFleet() {
        return "addNewFleet";
    }

    @IsAppUser
    @RequestMapping("/viewFleet")
    public String viewFleet() {
        return "viewFleet";
    }

    @IsAppUser
    @RequestMapping("/viewEditFleet/{id}")
    public String viewEditFleet() {
        return "viewEditFleet";
    }

    @IsAppUser
    @RequestMapping("/iwfia")
    public String iwfia() {
        return "iwfia";
    }

    @IsAppUser
    @RequestMapping("/auxContact")
    public String auxContact() {
        return "auxContact";
    }

    @IsAppUser
    @RequestMapping("/FleetMaintenaceList")
    public String FleetMaintenaceList() {
        return "FleetMaintenaceList";
    }

    @IsAppUser
    @RequestMapping("/employeePrint")
    public String employeePrint() {
        return "employeePrint";
    }

    @IsAppUser
    @RequestMapping("/print/{id}")
    public String print() {
        return "print";
    }

    @IsAppUser
    @RequestMapping("/monthlyCosts")
    public String monthlyCosts() {
        return "monthlyCosts";
    }    
}
