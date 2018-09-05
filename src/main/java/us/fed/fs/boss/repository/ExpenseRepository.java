package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    @Override
    <S extends Expense> S save(S entity);

    @Override
    List<Expense> findAll();
    
    List<Expense> findByFinancialYear(Short year);

    @Override
    void delete(Expense expense);

}
