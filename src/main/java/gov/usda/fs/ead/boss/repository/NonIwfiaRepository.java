package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.NonIwfia;

@Repository
public interface NonIwfiaRepository extends JpaRepository<NonIwfia, Long> {

    @Override
    <S extends NonIwfia> S save(S entity);

    @Override
    List<NonIwfia> findAll();

    @Override
    void delete(NonIwfia certificate);

}
