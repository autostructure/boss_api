package gov.usda.fs.ead.boss.repository;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.CellPhone;
@Repository
public interface CellPhoneRepository extends JpaRepository<CellPhone, Long> {

    @Override
    <S extends CellPhone> S save(S entity);

    @Override
    List<CellPhone> findAll();

    @Override
    void delete(CellPhone certificate);
    
    List<CellPhone> findAllByAssignedToId(Long employeeId); 

}
