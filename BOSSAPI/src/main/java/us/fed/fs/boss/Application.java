package us.fed.fs.boss;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import us.fed.fs.boss.http.BudgetService;
import us.fed.fs.boss.model.Expense;

@SpringBootApplication
public class Application implements CommandLineRunner{
	
	@Autowired
	BudgetService budgetService;
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
	@Override
	public void run(String... arg0) throws Exception {
		
		List<Expense> expenses = budgetService.getAllExpenses();
		for(Expense expense : expenses)
		{
			System.out.println(expense.getDescription());
		}
	}
}