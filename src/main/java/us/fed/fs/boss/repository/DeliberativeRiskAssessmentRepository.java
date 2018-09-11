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

    @Override
    void delete(DeliberativeRiskAssessment deliberativeRiskAssessment);
    
    List<DeliberativeRiskAssessment> findAllByEmployeeProfileId(Long employeeProfileId); 

}

