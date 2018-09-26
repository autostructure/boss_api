package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.TrainingCourse;

@Repository
public interface TrainingCourseRepository extends JpaRepository<TrainingCourse, Long> {

    @Override
    <S extends TrainingCourse> S save(S entity);

    @Override
    List<TrainingCourse> findAll();

    @Override
    void delete(TrainingCourse paymentCode);
}
