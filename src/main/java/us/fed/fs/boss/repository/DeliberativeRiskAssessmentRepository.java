package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.DeliberativeRiskAssessment;

@Repository
public interface DeliberativeRiskAssessmentRepository extends JpaRepository<DeliberativeRiskAssessment, Long> {

    @Override
    <S extends DeliberativeRiskAssessment> S save(S entity);

    @Override
    List<DeliberativeRiskAssessment> findAll();
    
    
    List<DeliberativeRiskAssessment> findAllByDeliberativeRiskAssessmentCourseId(Long deliberativeRiskAssessmentCourseId); 
    
    List<DeliberativeRiskAssessment> findAllByEmployeeId(Long employeeId); 
    
    List<DeliberativeRiskAssessment> findAllByEmployeeIdAndDeliberativeRiskAssessmentCourseId(Long employeeId, Long trainingCourseId); 


    @Override
    void delete(DeliberativeRiskAssessment deliberativeRiskAssessment);

}
