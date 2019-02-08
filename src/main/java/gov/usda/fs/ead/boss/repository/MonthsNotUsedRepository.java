package gov.usda.fs.ead.boss.repository;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.MonthsNotUsed;

@Repository
public interface MonthsNotUsedRepository extends JpaRepository<MonthsNotUsed, Long> {

    @Override
    <S extends MonthsNotUsed> S save(S entity);

    @Override
    List<MonthsNotUsed> findAll();
    
    public List<MonthsNotUsed> findAllByVehicleId(Long id);

    @Override
    void delete(MonthsNotUsed paymentCode);
}
