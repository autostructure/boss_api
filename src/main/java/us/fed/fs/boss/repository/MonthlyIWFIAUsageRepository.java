package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.MonthlyIWFIAUsage;

@Repository
public interface MonthlyIWFIAUsageRepository extends JpaRepository<MonthlyIWFIAUsage, Long> {

    @Override
    <S extends MonthlyIWFIAUsage> S save(S entity);

    @Override
    List<MonthlyIWFIAUsage> findAll();
    
    List<MonthlyIWFIAUsage> findAllByOperatorId(Long empoyeeProfileId); 

    @Override
    void delete(MonthlyIWFIAUsage vehicle);

}
