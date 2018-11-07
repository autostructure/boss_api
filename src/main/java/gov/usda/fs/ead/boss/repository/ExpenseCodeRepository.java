package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.ExpenseCode;

@Repository
public interface ExpenseCodeRepository extends JpaRepository<ExpenseCode, Long> {

    @Override
    <S extends ExpenseCode> S save(S entity);

    @Override
    List<ExpenseCode> findAll();

    @Override
    void delete(ExpenseCode expenseCode);

}
