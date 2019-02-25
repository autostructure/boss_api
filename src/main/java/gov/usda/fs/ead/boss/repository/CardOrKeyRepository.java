package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.CardOrKey;

@Repository
public interface CardOrKeyRepository extends JpaRepository<CardOrKey, Long> {

    @Override
    <S extends CardOrKey> S save(S entity);

    @Override
    List<CardOrKey> findAll();

    @Override
    void delete(CardOrKey certificate);

}
