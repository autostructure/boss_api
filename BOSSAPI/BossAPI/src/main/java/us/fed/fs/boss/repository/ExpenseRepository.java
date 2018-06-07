package us.fed.fs.boss.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
  // ...
}