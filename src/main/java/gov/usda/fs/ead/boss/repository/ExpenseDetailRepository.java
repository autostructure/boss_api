package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.ExpenseDetail;

@Repository
public interface ExpenseDetailRepository extends JpaRepository<ExpenseDetail, Long> {

    @Override
    <S extends ExpenseDetail> S save(S entity);

    @Override
    List<ExpenseDetail> findAll();

    @Override
    void delete(ExpenseDetail expenseDetail);

}
