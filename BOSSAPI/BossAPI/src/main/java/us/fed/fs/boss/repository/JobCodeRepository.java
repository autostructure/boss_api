package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.JobCode;

@Repository
public interface JobCodeRepository extends JpaRepository<JobCode, Long> {

    @Override
    @CacheEvict("jobCodes")
    <S extends JobCode> S save(S entity);

    @Override
    @Cacheable("jobCodes")
    List<JobCode> findAll();
    
    @Cacheable("jobCodes")
    List<JobCode> findByFinancialYear(Short year);

    @Override
    @CacheEvict("jobCodes")
    void delete(JobCode jobCode);
}
