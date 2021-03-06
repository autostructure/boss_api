package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.BudgetObjectCode;

@Repository
public interface BudgetObjectCodeRepository extends JpaRepository<BudgetObjectCode, Long> {

    @Override
    <S extends BudgetObjectCode> S save(S entity);

    @Override
    List<BudgetObjectCode> findAll();

    @Override
    void delete(BudgetObjectCode budgetObjectCode);

}
