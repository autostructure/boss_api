package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    @Override
    @CacheEvict("expenses")
    <S extends Expense> S save(S entity);

    @Override
    @Cacheable("expenses")
    List<Expense> findAll();
    
    @Cacheable("expenses")
    List<Expense> findByFinancialYear(Short year);

    @Override
    @CacheEvict("expenses")
    void delete(Expense expense);

}
