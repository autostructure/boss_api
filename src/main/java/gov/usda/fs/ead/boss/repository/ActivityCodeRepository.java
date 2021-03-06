package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.ActivityCode;

@Repository
public interface ActivityCodeRepository extends JpaRepository<ActivityCode, Long> {

    @Override
    <S extends ActivityCode> S save(S entity);

    @Override
    List<ActivityCode> findAll();

    @Override
    void delete(ActivityCode activityCode);

}
