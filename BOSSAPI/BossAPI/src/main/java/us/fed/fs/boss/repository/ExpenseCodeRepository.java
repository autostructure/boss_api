package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.ExpenseCode;

@Repository
public interface ExpenseCodeRepository extends JpaRepository<ExpenseCode, Long> {

    @Override
    @CachePut("expenseCodes")
    <S extends ExpenseCode> S save(S entity);

    @Override
    @Cacheable("expenseCodes")
    List<ExpenseCode> findAll();

    @Override
    @CacheEvict("expenseCodes")
    void delete(ExpenseCode expenseCode);

}
