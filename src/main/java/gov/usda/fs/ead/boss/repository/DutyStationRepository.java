package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.DutyStation;

@Repository
public interface DutyStationRepository extends JpaRepository<DutyStation, Long> {

    @Override
    <S extends DutyStation> S save(S entity);

    @Override
    List<DutyStation> findAll();

    @Override
    void delete(DutyStation budgetObjectCode);

}
