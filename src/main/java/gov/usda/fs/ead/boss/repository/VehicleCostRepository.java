package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.VehicleCost;

@Repository
public interface VehicleCostRepository extends JpaRepository<VehicleCost, Long> {

    @Override
    <S extends VehicleCost> S save(S entity);

    @Override
    List<VehicleCost> findAll();
    
    List<VehicleCost> findAllByVehicleId(Long vehicleId);

    @Override
    void delete(VehicleCost vehicleCost);

}
