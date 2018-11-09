package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.JobCode;

@Repository
public interface JobCodeRepository extends JpaRepository<JobCode, Long> {

    @Override
    public <S extends JobCode> S save(S entity);

    @Override
    public List<JobCode> findAll();

    public List<JobCode> findByFinancialYear(Short year);

    @Override
    public void delete(JobCode jobCode);
}
