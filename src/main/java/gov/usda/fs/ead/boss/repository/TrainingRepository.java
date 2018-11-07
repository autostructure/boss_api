package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.Training;

@Repository
public interface TrainingRepository extends JpaRepository<Training, Long> {

    @Override
    <S extends Training> S save(S entity);

    @Override
    List<Training> findAll();
    
    List<Training> findAllByTrainingCourseId(Long trainingCourseId); 
    
    List<Training> findAllByEmployeeId(Long employeeId); 
    
    List<Training> findAllByEmployeeIdAndTrainingCourseId(Long employeeId, Long trainingCourseId); 

    @Override
    void delete(Training expenseDetail);

}
