package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.ExpenseCode;

@Repository
public interface ExpenseCodeRepository extends JpaRepository<ExpenseCode, Long> {

    @Override
    <S extends ExpenseCode> S save(S entity);

    @Override
    List<ExpenseCode> findAll();

    @Override
    void delete(ExpenseCode expenseCode);

}