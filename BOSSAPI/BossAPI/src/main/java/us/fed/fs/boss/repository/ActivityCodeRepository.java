package us.fed.fs.boss.repository;


import java.util.List;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.ActivityCode;

@Repository
public interface ActivityCodeRepository extends JpaRepository<ActivityCode, Long> {

    @Override
    @CacheEvict("activityCodes")
    <S extends ActivityCode> S save(S entity);

    @Override
    @Cacheable("activityCodes")
    List<ActivityCode> findAll();

    @Override
    @CacheEvict("activityCodes")
    void delete(ActivityCode activityCode);

}
