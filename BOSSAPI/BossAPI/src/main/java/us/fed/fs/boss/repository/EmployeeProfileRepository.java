package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.EmployeeProfile;

@Repository
public interface EmployeeProfileRepository extends JpaRepository<EmployeeProfile, Long> {

    @Override
    @CacheEvict("employeeProfiles")
    <S extends EmployeeProfile> S save(S entity);

    @Override
    @Cacheable("employeeProfiles")
    List<EmployeeProfile> findAll();

    @Override
    @CacheEvict("employeeProfiles")
    void delete(EmployeeProfile employeeProfile);

}
