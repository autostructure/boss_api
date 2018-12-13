package gov.usda.fs.ead.boss.controller;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import gov.usda.fs.ead.boss.exception.ResourceNotFoundException;
import gov.usda.fs.ead.boss.model.FieldEquipment;
import gov.usda.fs.ead.boss.model.MonthlyIWFIAUsage;
import gov.usda.fs.ead.boss.model.Vehicle;
import gov.usda.fs.ead.boss.model.VehicleCost;
import gov.usda.fs.ead.boss.model.VehicleMaintenanceRecord;
import gov.usda.fs.ead.boss.repository.FieldEquipmentRepository;
import gov.usda.fs.ead.boss.repository.MonthlyIWFIAUsageRepository;
import gov.usda.fs.ead.boss.repository.VehicleCostRepository;
import gov.usda.fs.ead.boss.repository.VehicleMaintenanceRecordRepository;
import gov.usda.fs.ead.boss.repository.VehicleRepository;
import java.util.List;

@RestController
public class PropertyManagementController {

    @Autowired
    VehicleRepository vehicleRepository;

    @Autowired
    VehicleMaintenanceRecordRepository vehicleMaintenanceRecordRepository;

    @Autowired
    FieldEquipmentRepository fieldEquipmentRepository;

    @Autowired
    VehicleCostRepository vehicleCostRepository;

    @Autowired
    MonthlyIWFIAUsageRepository monthlyIWFIAUsageRepository;

    @PostMapping("/vehicle")
    public ResponseEntity createVehicle(@Valid @RequestBody final Vehicle vehicleDetails) {

        List<VehicleMaintenanceRecord> recs1 = vehicleDetails.getMaintenanceRecords();
        recs1.forEach(rec -> {
            rec.setVehicle(vehicleDetails);
        });

        List<MonthlyIWFIAUsage> recs2 = vehicleDetails.getMonthlyIWFIAUsage();
        recs2.forEach(rec -> {
            rec.setVehicle(vehicleDetails);
        });

        vehicleDetails.setMaintenanceRecords(recs1);
        vehicleDetails.setMonthlyIWFIAUsage(recs2);

        return new ResponseEntity<>(vehicleRepository.save(vehicleDetails), HttpStatus.OK);

    }

    @GetMapping("/vehicle")
    public ResponseEntity getAllVehicles() {

        return new ResponseEntity<>(vehicleRepository.findAll(), HttpStatus.OK);

    }

    @GetMapping("/vehicle/{id}")
    public ResponseEntity getVehicle(@PathVariable(value = "id") Long vehicleId) {

        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle", "id", vehicleId));
        return new ResponseEntity<>(vehicle, HttpStatus.OK);

    }

    @PutMapping("/vehicle/{id}")
    public Vehicle updateVehicle(@PathVariable(value = "id") Long vehicleId,
            @RequestBody Vehicle vehicleDetails) {

        vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("Vehicle", "id", vehicleId);
                });

        List<VehicleMaintenanceRecord> recs1 = vehicleDetails.getMaintenanceRecords();
        recs1.forEach(rec -> {
            rec.setVehicle(vehicleDetails);
        });

        List<MonthlyIWFIAUsage> recs2 = vehicleDetails.getMonthlyIWFIAUsage();
        recs2.forEach(rec -> {
            rec.setVehicle(vehicleDetails);
        });

        vehicleDetails.setMaintenanceRecords(recs1);
        vehicleDetails.setMonthlyIWFIAUsage(recs2);

        Vehicle updated = vehicleRepository.save(vehicleDetails);
        return updated;

    }

    @DeleteMapping("/vehicle/{id}")
    public ResponseEntity<?> deleteVehicle(@PathVariable(value = "id") Long vehicleId) {

        Vehicle pfile = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle", "id", vehicleId));
        vehicleRepository.delete(pfile);
        return ResponseEntity.ok().build();

    }

    @PostMapping("/vehicleMaintenanceRecord")
    public ResponseEntity createVehicleMaintenanceRecord(@Valid @RequestBody VehicleMaintenanceRecord vehicleMaintenanceRecordDetails) {

        vehicleMaintenanceRecordDetails = vehicleMaintenanceRecordRepository.save(vehicleMaintenanceRecordDetails);
        return new ResponseEntity<>(vehicleMaintenanceRecordDetails, HttpStatus.OK);

    }

    @GetMapping("/vehicleMaintenanceRecord")
    public ResponseEntity getAllVehicleMaintenanceRecords(@RequestParam(value = "vehicleId", required = false) Long vehicleId) {

        if (vehicleId != null) {
            return new ResponseEntity<>(vehicleMaintenanceRecordRepository.findAllByVehicleId(vehicleId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(vehicleMaintenanceRecordRepository.findAll(), HttpStatus.OK);
        }

    }

    @GetMapping("/vehicleMaintenanceRecord/{id}")
    public ResponseEntity getVehicleMaintenanceRecord(@PathVariable(value = "id") Long vehicleMaintenanceRecordId) {

        VehicleMaintenanceRecord vehicleMaintenanceRecord = vehicleMaintenanceRecordRepository.findById(vehicleMaintenanceRecordId)
                .orElseThrow(() -> new ResourceNotFoundException("VehicleMaintenanceRecord", "id", vehicleMaintenanceRecordId));
        return new ResponseEntity<>(vehicleMaintenanceRecord, HttpStatus.OK);

    }

    @PutMapping("/vehicleMaintenanceRecord/{id}")
    public VehicleMaintenanceRecord updateVehicleMaintenanceRecord(@PathVariable(value = "id") Long vehicleMaintenanceRecordId,
            @RequestBody VehicleMaintenanceRecord vehicleMaintenanceRecordDetails) {

        vehicleMaintenanceRecordRepository.findById(vehicleMaintenanceRecordId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("VehicleMaintenanceRecord", "id", vehicleMaintenanceRecordId);
                });

        VehicleMaintenanceRecord updated = vehicleMaintenanceRecordRepository.save(vehicleMaintenanceRecordDetails);
        return updated;

    }

    @DeleteMapping("/vehicleMaintenanceRecord/{id}")
    public ResponseEntity<?> deleteVehicleMaintenanceRecord(@PathVariable(value = "id") Long vehicleMaintenanceRecordId) {

        VehicleMaintenanceRecord pfile = vehicleMaintenanceRecordRepository.findById(vehicleMaintenanceRecordId)
                .orElseThrow(() -> new ResourceNotFoundException("VehicleMaintenanceRecord", "id", vehicleMaintenanceRecordId));
        vehicleMaintenanceRecordRepository.delete(pfile);
        return ResponseEntity.ok().build();

    }

    @GetMapping("/vehicleCost")
    public ResponseEntity getAllVehicleCosts(@RequestParam(value = "vehicleId", required = false) Long vehicleId) {

        if (vehicleId != null) {
            return new ResponseEntity<>(vehicleCostRepository.findAllByVehicleId(vehicleId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(vehicleCostRepository.findAll(), HttpStatus.OK);
        }

    }

    @GetMapping("/vehicleCost/{id}")
    public ResponseEntity getVehicleCost(@PathVariable(value = "id") Long vehicleCostId) {

        VehicleCost vehicleCost = vehicleCostRepository.findById(vehicleCostId)
                .orElseThrow(() -> new ResourceNotFoundException("VehicleCost", "id", vehicleCostId));
        return new ResponseEntity<>(vehicleCost, HttpStatus.OK);

    }

    @PutMapping("/vehicleCost/{id}")
    public VehicleCost updateVehicleCost(@PathVariable(value = "id") Long vehicleCostId,
            @RequestBody VehicleCost vehicleCostDetails) {

        vehicleCostRepository.findById(vehicleCostId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("VehicleCost", "id", vehicleCostId);
                });

        VehicleCost updated = vehicleCostRepository.save(vehicleCostDetails);
        return updated;

    }

    @DeleteMapping("/vehicleCost/{id}")
    public ResponseEntity<?> deleteVehicleCost(@PathVariable(value = "id") Long vehicleCostId) {

        VehicleCost pfile = vehicleCostRepository.findById(vehicleCostId)
                .orElseThrow(() -> new ResourceNotFoundException("VehicleCost", "id", vehicleCostId));
        vehicleCostRepository.delete(pfile);
        return ResponseEntity.ok().build();

    }

    @GetMapping("/monthlyIWFIAUsage")
    public ResponseEntity getAllMonthlyIWFIAUsages(@RequestParam(value = "vehicleId", required = false) Long vehicleId) {

        if (vehicleId != null) {
            return new ResponseEntity<>(monthlyIWFIAUsageRepository.findAllByVehicleId(vehicleId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(monthlyIWFIAUsageRepository.findAll(), HttpStatus.OK);
        }

    }
    
    @GetMapping("/monthlyIWFIAUsage/{id}")
    public ResponseEntity getMonthlyIWFIAUsage(@PathVariable(value = "id") Long monthlyIWFIAUsageId) {

        MonthlyIWFIAUsage monthlyIWFIAUsage = monthlyIWFIAUsageRepository.findById(monthlyIWFIAUsageId)
                .orElseThrow(() -> new ResourceNotFoundException("MonthlyIWFIAUsage", "id", monthlyIWFIAUsageId));
        return new ResponseEntity<>(monthlyIWFIAUsage, HttpStatus.OK);

    }

    @PutMapping("/monthlyIWFIAUsage/{id}")
    public MonthlyIWFIAUsage updateMonthlyIWFIAUsage(@PathVariable(value = "id") Long monthlyIWFIAUsageId,
            @RequestBody MonthlyIWFIAUsage monthlyIWFIAUsageDetails) {

        monthlyIWFIAUsageRepository.findById(monthlyIWFIAUsageId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("MonthlyIWFIAUsage", "id", monthlyIWFIAUsageId);
                });

        MonthlyIWFIAUsage updated = monthlyIWFIAUsageRepository.save(monthlyIWFIAUsageDetails);
        return updated;

    }

    @DeleteMapping("/monthlyIWFIAUsage/{id}")
    public ResponseEntity<?> deleteMonthlyIWFIAUsage(@PathVariable(value = "id") Long monthlyIWFIAUsageId) {

        MonthlyIWFIAUsage pfile = monthlyIWFIAUsageRepository.findById(monthlyIWFIAUsageId)
                .orElseThrow(() -> new ResourceNotFoundException("MonthlyIWFIAUsage", "id", monthlyIWFIAUsageId));
        monthlyIWFIAUsageRepository.delete(pfile);
        return ResponseEntity.ok().build();

    }

    @PostMapping("/fieldEquipment")
    public ResponseEntity createFieldEquipment(@Valid @RequestBody FieldEquipment fieldEquipmentDetails) {

        fieldEquipmentDetails = fieldEquipmentRepository.save(fieldEquipmentDetails);
        return new ResponseEntity<>(fieldEquipmentDetails, HttpStatus.OK);

    }

    @GetMapping("/fieldEquipment")
    public ResponseEntity getAllFieldEquipments(@RequestParam(value = "nameCode", required = false) final String nameCode) {

        return new ResponseEntity<>(fieldEquipmentRepository.findAll(), HttpStatus.OK);

    }

    @GetMapping("/fieldEquipment/{id}")
    public ResponseEntity getFieldEquipment(@PathVariable(value = "id") Long fieldEquipmentId) {

        FieldEquipment fieldEquipment = fieldEquipmentRepository.findById(fieldEquipmentId)
                .orElseThrow(() -> new ResourceNotFoundException("FieldEquipment", "id", fieldEquipmentId));
        return new ResponseEntity<>(fieldEquipment, HttpStatus.OK);

    }

    @PutMapping("/fieldEquipment/{id}")
    public FieldEquipment updateFieldEquipment(@PathVariable(value = "id") Long fieldEquipmentId,
            @RequestBody FieldEquipment fieldEquipmentDetails) {

        fieldEquipmentRepository.findById(fieldEquipmentId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("FieldEquipment", "id", fieldEquipmentId);
                });

        FieldEquipment updated = fieldEquipmentRepository.save(fieldEquipmentDetails);
        return updated;

    }

    @DeleteMapping("/fieldEquipment/{id}")
    public ResponseEntity<?> deleteFieldEquipment(@PathVariable(value = "id") Long fieldEquipmentId) {

        FieldEquipment pfile = fieldEquipmentRepository.findById(fieldEquipmentId)
                .orElseThrow(() -> new ResourceNotFoundException("FieldEquipment", "id", fieldEquipmentId));
        fieldEquipmentRepository.delete(pfile);
        return ResponseEntity.ok().build();

    }

}
