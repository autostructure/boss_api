package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.Certificate;
@Repository
public interface CertificateRepository extends JpaRepository<Certificate, Long> {

    @Override
    <S extends Certificate> S save(S entity);

    @Override
    List<Certificate> findAll();

    @Override
    void delete(Certificate certificate);

}
