package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.ITEquipment;

@Repository
public interface ITEquipmentRepository extends JpaRepository<ITEquipment, Long> {

    @Override
    <S extends ITEquipment> S save(S entity);

    @Override
    List<ITEquipment> findAll();

    @Override
    void delete(ITEquipment certificate);

}
