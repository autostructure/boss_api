package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.Certificate;
@Repository
public interface CertificateRepository extends JpaRepository<Certificate, Long> {

    @Override
    <S extends Certificate> S save(S entity);

    @Override
    List<Certificate> findAll();

    @Override
    void delete(Certificate certificate);

}
