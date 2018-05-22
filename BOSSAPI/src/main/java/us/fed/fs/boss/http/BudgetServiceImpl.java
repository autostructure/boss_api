package us.fed.fs.boss.http;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import us.fed.fs.boss.model.Expense;
import us.fed.fs.boss.repository.ExpenseRepository;

@Service
public class BudgetServiceImpl implements BudgetService {

    @Autowired
    private ExpenseRepository expenseRepository;

    public void addExpense(Expense expense) {
        expenseRepository.save(expense);
    }

    public List<Expense> getAllExpenses() {
        List<Expense> result = new ArrayList<>();
        expenseRepository.findAll().forEach(result::add);
        return result;
    }

    @Override
    public Expense getExpense(long id) {
        return expenseRepository.findOne(id);
    }

    @Override
    public void updateExpense(Expense expense) {
        expenseRepository.save(expense);
    }

    @Override
    public void deleteExpense(long id) {
        expenseRepository.delete(id);    
    }

}
