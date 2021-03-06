package gov.usda.fs.ead.boss.repository;

import gov.usda.fs.ead.boss.model.VehicleCost;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.VehicleMaintenanceRecord;

@Repository
public interface VehicleMaintenanceRecordRepository extends JpaRepository<VehicleMaintenanceRecord, Long> {

    @Override
    <S extends VehicleMaintenanceRecord> S save(S entity);

    @Override
    List<VehicleMaintenanceRecord> findAll();
    
    List<VehicleCost> findAllByVehicleId(Long vehicleId);

    @Override
    void delete(VehicleMaintenanceRecord vehicleMaintenanceRecord);

}
