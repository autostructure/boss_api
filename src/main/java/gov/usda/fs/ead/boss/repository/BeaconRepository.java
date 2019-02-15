package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.Beacon;

@Repository
public interface BeaconRepository extends JpaRepository<Beacon, Long> {

    @Override
    <S extends Beacon> S save(S entity);

    @Override
    List<Beacon> findAll();

    @Override
    void delete(Beacon certificate);

}
