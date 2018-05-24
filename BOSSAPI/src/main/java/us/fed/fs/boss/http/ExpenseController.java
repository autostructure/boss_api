package us.fed.fs.boss.http;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import us.fed.fs.boss.model.Expense;
import us.fed.fs.boss.service.BudgetService;

@RestController
public class ExpenseController {
    
    @Autowired
    BudgetService budgetService;
    
    @RequestMapping(value = "/expense", method = GET)
    @ResponseBody
    public List<Expense> getAllExpenses(@PathVariable long id) {
        return budgetService.getAllExpenses();
    }

    @RequestMapping(value = "/expense/{id}", method = GET)
    @ResponseBody
    public Expense getExpenseById(@PathVariable long id) {
        return budgetService.getExpense(id);
    }
    
    @RequestMapping(value = "/expense", method = POST)
    @ResponseBody
    public void addExpense(Expense expense) {
        budgetService.saveExpense(expense);
    }
    
    @RequestMapping(value = "/expense", method = PUT)
    @ResponseBody
    public void updateExpense(Expense expense) {
        budgetService.saveExpense(expense);
    }
    
    @RequestMapping(value = "/expense/{id}", method = DELETE)
    @ResponseBody
    public void deleteExpense(@PathVariable long id) {
        budgetService.deleteExpense(1L);
    }
}