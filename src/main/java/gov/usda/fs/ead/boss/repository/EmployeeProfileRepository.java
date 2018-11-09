package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.EmployeeProfile;

@Repository
public interface EmployeeProfileRepository extends JpaRepository<EmployeeProfile, Long> {

    @Override
    <S extends EmployeeProfile> S save(S entity);

    @Override
    List<EmployeeProfile> findAll();

    List<EmployeeProfile> findByNameCode(String nameCode);
    
    EmployeeProfile findByFsEmail(String fsEmail);

    @Override
    void delete(EmployeeProfile employeeProfile);

}
