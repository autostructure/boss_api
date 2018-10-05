package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.Vehicle;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    @Override
    <S extends Vehicle> S save(S entity);

    @Override
    List<Vehicle> findAll();
    
    List<Vehicle> findAllByAssignedOperatorId(Long empoyeeProfileId); 

    @Override
    void delete(Vehicle vehicle);

}
