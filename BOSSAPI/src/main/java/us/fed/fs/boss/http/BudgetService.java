package us.fed.fs.boss.http;

import java.util.List;
import us.fed.fs.boss.model.Expense;

public interface BudgetService {
	public void addExpense(Expense expense);
	public List<Expense> getAllExpenses();
        public Expense getExpense(long id);
        public void updateExpense(Expense expense);
        public void deleteExpense(long id);
}
