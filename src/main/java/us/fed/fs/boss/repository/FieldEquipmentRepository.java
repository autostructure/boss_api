package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.FieldEquipment;

@Repository
public interface FieldEquipmentRepository extends JpaRepository<FieldEquipment, Long> {

    @Override
    <S extends FieldEquipment> S save(S entity);

    @Override
    List<FieldEquipment> findAll();

    @Override
    void delete(FieldEquipment fieldEquipment);

}
