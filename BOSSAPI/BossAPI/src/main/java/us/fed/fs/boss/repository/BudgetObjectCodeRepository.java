package us.fed.fs.boss.repository;


import java.util.List;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.BudgetObjectCode;

@Repository
public interface BudgetObjectCodeRepository extends JpaRepository<BudgetObjectCode, Long> {

    @Override
    @CacheEvict("budgetObjectCodes")
    <S extends BudgetObjectCode> S save(S entity);

    @Override
    @Cacheable("budgetObjectCodes")
    List<BudgetObjectCode> findAll();

    @Override
    @CacheEvict("budgetObjectCodes")
    void delete(BudgetObjectCode budgetObjectCode);

}

