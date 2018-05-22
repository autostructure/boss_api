package us.fed.fs.boss.http;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import us.fed.fs.boss.exception.BadRequestException;
import us.fed.fs.boss.exception.ResourceNotFoundException;

import us.fed.fs.boss.model.Expense;
import us.fed.fs.boss.repository.ExpenseRepository;

@Service
public class BudgetServiceImpl implements BudgetService {

    @Autowired
    private ExpenseRepository expenseRepository;

    public void addExpense(Expense expense) {
        if (expense.getId() == null) {
            expenseRepository.save(expense);
        } else {
            throw new BadRequestException("bad request");
        }
    }

    public List<Expense> getAllExpenses() {
        List<Expense> result = new ArrayList<>();
        expenseRepository.findAll().forEach(result::add);
        return result;
    }

    @Override
    public Expense getExpense(long id) {
        return expenseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("not found"));
    }

    @Override
    public void updateExpense(Expense expense) {
        expenseRepository.save(expense);
    }

    @Override
    public void deleteExpense(long id) {
        expenseRepository.deleteById(id);
    }

}
