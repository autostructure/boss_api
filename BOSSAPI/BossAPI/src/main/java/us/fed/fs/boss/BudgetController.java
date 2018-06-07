package us.fed.fs.boss;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import us.fed.fs.boss.exception.ResourceNotFoundException;
import us.fed.fs.boss.model.Expense;
import us.fed.fs.boss.repository.ExpenseRepository;

@RestController
public class BudgetController {

    @Autowired
    ExpenseRepository expenseRepository;
    
    // Get All Expenses
    @GetMapping("/test")
    public String test() {
        return "Test";
    }

    // Get All Expenses
    @GetMapping("/expense")
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    @GetMapping("/expense/{id}")
    public Expense getExpenseById(@PathVariable(value = "id") Long expenseId) {
        return expenseRepository.findById(expenseId)
                .orElseThrow(() -> new ResourceNotFoundException("Expense", "id", expenseId));
    }
    
    @PostMapping("/expense")
    public void createExpense(@Valid @RequestBody Expense expenseDetails) {
        expenseRepository.save(expenseDetails);
    }

    @PutMapping("/expense/{id}")
    public Expense updateExpense(@PathVariable(value = "id") Long expenseId,
            @Valid @RequestBody Expense expenseDetails) {

        expenseRepository.findById(expenseId)
                .orElseThrow(() -> new ResourceNotFoundException("Expense", "id", expenseId));

        Expense updatedExpense = expenseRepository.save(expenseDetails);
        return updatedExpense;
    }

    @DeleteMapping("/expense/{id}")
    public ResponseEntity<?> deleteExpense(@PathVariable(value = "id") Long expenseId) {
        
        Expense expense = expenseRepository.findById(expenseId)
                .orElseThrow(() -> new ResourceNotFoundException("Expense", "id", expenseId));
        expenseRepository.delete(expense);
        return ResponseEntity.ok().build();
        
    }
}
