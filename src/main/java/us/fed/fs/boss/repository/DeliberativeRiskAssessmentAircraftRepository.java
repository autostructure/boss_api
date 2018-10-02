package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.DeliberativeRiskAssessmentAircraft;

@Repository
public interface DeliberativeRiskAssessmentAircraftRepository extends JpaRepository<DeliberativeRiskAssessmentAircraft, Long> {

    @Override
    <S extends DeliberativeRiskAssessmentAircraft> S save(S entity);

    @Override
    List<DeliberativeRiskAssessmentAircraft> findAll();

    @Override
    void delete(DeliberativeRiskAssessmentAircraft deliberativeRiskAssessmentAircraft);

}
