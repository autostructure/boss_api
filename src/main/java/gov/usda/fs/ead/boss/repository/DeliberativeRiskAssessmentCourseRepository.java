package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.DeliberativeRiskAssessmentCourse;

@Repository
public interface DeliberativeRiskAssessmentCourseRepository extends JpaRepository<DeliberativeRiskAssessmentCourse, Long> {

    @Override
    <S extends DeliberativeRiskAssessmentCourse> S save(S entity);

    @Override
    List<DeliberativeRiskAssessmentCourse> findAll();

    @Override
    void delete(DeliberativeRiskAssessmentCourse course);


    
}
