package gov.usda.fs.ead.boss.controller;

import com.fasterxml.jackson.annotation.JsonView;
import gov.usda.fs.ead.boss.CaptchaService;
import java.util.concurrent.ExecutionException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
import gov.usda.fs.ead.boss.model.Vehicle;
import gov.usda.fs.ead.boss.model.Views;
import gov.usda.fs.ead.boss.repository.FieldEquipmentRepository;
import gov.usda.fs.ead.boss.repository.VehicleRepository;
import gov.usda.fs.ead.boss.saml.IAuthenticationFacade;

@RestController
public class PropertyManagementController {

    @Autowired
    VehicleRepository vehicleRepository;

    @Autowired
    CaptchaService captchaService;
    
    @Autowired
    FieldEquipmentRepository fieldEquipmentRepository;
    
    @Autowired
    private IAuthenticationFacade authenticationFacade;

    @PostMapping("/vehicle")
    public ResponseEntity createVehicle(@Valid @RequestBody Vehicle vehicleDetails) {

        vehicleDetails = vehicleRepository.save(vehicleDetails);
        return new ResponseEntity<>(vehicleDetails, HttpStatus.OK);

    }

    // Get All Employee Profiles
    @JsonView(Views.Internal.class)
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

    @JsonView(Views.Internal.class)
    @PutMapping("/vehicle/{id}")
    public Vehicle updateVehicle(@PathVariable(value = "id") Long vehicleId,
            @RequestBody Vehicle vehicleDetails) {

        vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("Vehicle", "id", vehicleId);
                });

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

    @GetMapping("/captcha/{text}")
    public ResponseEntity captcha(@PathVariable(value = "text") String text) {

        try {
            byte[] imgData = captchaService.getCaptchaImageBytes(text).get();
            HttpHeaders headers = new HttpHeaders();
            for (int i = 0; i < 10; i++) {
                System.out.println(Integer.toString(imgData.length) + " bytes");
            }
            headers.setContentType(MediaType.IMAGE_PNG);
            return new ResponseEntity<byte[]>(imgData, headers, HttpStatus.CREATED);
        } catch (InterruptedException | ExecutionException ex) {
            Logger.getLogger(PropertyManagementController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    
    @PostMapping("/fieldEquipment")
    public ResponseEntity createFieldEquipment(@Valid @RequestBody FieldEquipment fieldEquipmentDetails) {

        fieldEquipmentDetails = fieldEquipmentRepository.save(fieldEquipmentDetails);
        return new ResponseEntity<>(fieldEquipmentDetails, HttpStatus.OK);

    }

    // Get All Employee Profiles
    @JsonView(Views.Internal.class)
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

    @JsonView(Views.Internal.class)
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
