package us.fed.fs.boss;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import us.fed.fs.boss.exception.ResourceNotFoundException;
import us.fed.fs.boss.model.DutyStation;
import us.fed.fs.boss.model.EmployeeProfile;
import us.fed.fs.boss.model.Training;
import us.fed.fs.boss.repository.DutyStationRepository;
import us.fed.fs.boss.repository.EmployeeProfileRepository;
import us.fed.fs.boss.repository.TrainingRepository;

@RestController
public class HumanResourcesController {

    @Autowired
    EmployeeProfileRepository employeeProfileRepository;

    @Autowired
    TrainingRepository trainingRepository;

    @Autowired
    DutyStationRepository dutyStationRepository;

    @PostMapping("/employeeProfile")
    public ResponseEntity createEmployeeProfile(@Valid @RequestBody EmployeeProfile employeeProfileDetails) {
        employeeProfileDetails = employeeProfileRepository.save(employeeProfileDetails);
        return new ResponseEntity<>(employeeProfileDetails, HttpStatus.OK);

    }

    @PutMapping("/employeeProfile/{id}")
    public EmployeeProfile updateEmployeeProfile(@PathVariable(value = "id") Long employeeProfileId,
            @RequestBody EmployeeProfile employeeProfileDetails) {

        employeeProfileRepository.findById(employeeProfileId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("EmployeeProfile", "id", employeeProfileId);
                });

        // do this programmatically for later groups / permissions control
        employeeProfileDetails.getEmployees().forEach((child) -> {
            if (!child.getId().equals(employeeProfileDetails.getId())) {
                child.setSupervisor(employeeProfileDetails);
                employeeProfileRepository.save(child);
            }
        });

        EmployeeProfile updatedEmployeeProfile = employeeProfileRepository.save(employeeProfileDetails);
        return updatedEmployeeProfile;

    }

    // Get All Employee Profiles
    @GetMapping("/employeeProfile")
    public ResponseEntity getAllEmployeeProfiles(@RequestParam(value = "nameCode", required = false) final String nameCode) {

        if (nameCode == null) {
            return new ResponseEntity<>(employeeProfileRepository.findAll(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(employeeProfileRepository.findByNameCode(nameCode).get(0), HttpStatus.OK);
        }

    }

    @GetMapping("/dutyStations")
    public ResponseEntity getDutyStations(@RequestParam(value = "nameCode", required = false) final String nameCode) {
        List<String> namesList = dutyStationRepository.findAll().stream()
                .map(DutyStation::getDescription)
                .collect(Collectors.toList());
        return new ResponseEntity<>(namesList, HttpStatus.OK);
    }

    @GetMapping("/employeeProfile/{id}")
    public EmployeeProfile getEmployeeProfileById(@PathVariable(value = "id") Long employeeProfileId) {
        return employeeProfileRepository.findById(employeeProfileId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("EmployeeProfile", "id", employeeProfileId);
                });
    }

    // Get All Employee Profiles
    @GetMapping("/training")
    public ResponseEntity getAllTrainings(@RequestParam(value = "nameCode", required = false) final String nameCode) {

        if (nameCode == null) {
            return new ResponseEntity<>(trainingRepository.findAll(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(employeeProfileRepository.findByNameCode(nameCode).get(0).getTraining(), HttpStatus.OK);
        }

    }

    @GetMapping("/training/{id}")
    public Training getTrainingById(@PathVariable(value = "id") Long trainingId) {
        return trainingRepository.findById(trainingId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("Training", "id", trainingId);
                });
    }

}
