package us.fed.fs.boss.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import us.fed.fs.boss.model.Expense;

@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Long> {
  // ...
}
