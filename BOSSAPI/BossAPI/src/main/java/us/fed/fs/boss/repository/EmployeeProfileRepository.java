package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.EmployeeProfile;

@Repository
public interface EmployeeProfileRepository extends JpaRepository<EmployeeProfile, Long> {

    @Override
    <S extends EmployeeProfile> S save(S entity);

    @Override
    List<EmployeeProfile> findAll();
    
    List<EmployeeProfile> findByNameCode(String nameCode);

    @Override
    void delete(EmployeeProfile employeeProfile);

}
