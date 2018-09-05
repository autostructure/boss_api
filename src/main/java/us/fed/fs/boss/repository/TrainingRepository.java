package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.Training;

@Repository
public interface TrainingRepository extends JpaRepository<Training, Long> {

    @Override
    <S extends Training> S save(S entity);

    @Override
    List<Training> findAll();

    @Override
    void delete(Training expenseDetail);

}
