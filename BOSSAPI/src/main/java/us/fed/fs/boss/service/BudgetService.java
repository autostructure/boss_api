package us.fed.fs.boss.service;

import java.util.List;
import us.fed.fs.boss.exception.ResourceNotFoundException;
import us.fed.fs.boss.model.Expense;

public interface BudgetService {
	public List<Expense> getAllExpenses();
        public Expense getExpense(long id);
        public void saveExpense(Expense expense);
        public void deleteExpense(long id);
}
