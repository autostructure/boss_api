package us.fed.fs.boss;

import java.util.List;
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
import us.fed.fs.boss.model.EmployeeProfile;
import us.fed.fs.boss.model.JobCode;
import us.fed.fs.boss.repository.EmployeeProfileRepository;

@RestController
public class HumanResourcesController {

    @Autowired
    EmployeeProfileRepository employeeProfileRepository;
    
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

        EmployeeProfile updatedEmployeeProfile = employeeProfileRepository.save(employeeProfileDetails);
        return updatedEmployeeProfile;
    }
    
    // Get All Employee Profiles
    @GetMapping("/employeeProfile")
    public ResponseEntity getAllEmployeeProfiles(@RequestParam(value = "nameCode", required=false) final String nameCode) {
       
        if(nameCode==null) {
            return new ResponseEntity<>(employeeProfileRepository.findAll(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(employeeProfileRepository.findByNameCode(nameCode).get(0), HttpStatus.OK);
        }
        
   
    }
    
    @GetMapping("/employeeProfile/{id}")
    public EmployeeProfile getEmployeeProfileById(@PathVariable(value = "id") Long employeeProfileId) {
        return employeeProfileRepository.findById(employeeProfileId)
                .orElseThrow(() -> {
            return new ResourceNotFoundException("EmployeeProfile", "id", employeeProfileId);
        });
    }

}
