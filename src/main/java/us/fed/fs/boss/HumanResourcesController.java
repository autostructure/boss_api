package us.fed.fs.boss;

import com.fasterxml.jackson.annotation.JsonView;
import java.util.List;
import java.util.stream.Collectors;
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
import us.fed.fs.boss.exception.ResourceNotFoundException;
import us.fed.fs.boss.model.Contact;
import us.fed.fs.boss.model.DeliberativeRiskAssessment;
import us.fed.fs.boss.model.DeliberativeRiskAssessmentAircraft;
import us.fed.fs.boss.model.DutyStation;
import us.fed.fs.boss.model.EmployeeProfile;
import us.fed.fs.boss.model.ProfilePicture;
import us.fed.fs.boss.model.Training;
import us.fed.fs.boss.model.Views;
import us.fed.fs.boss.repository.ContactRepository;
import us.fed.fs.boss.repository.DeliberativeRiskAssessmentAircraftRepository;
import us.fed.fs.boss.repository.DeliberativeRiskAssessmentRepository;
import us.fed.fs.boss.repository.DutyStationRepository;
import us.fed.fs.boss.repository.EmployeeProfileRepository;
import us.fed.fs.boss.repository.ProfilePictureRepository;
import us.fed.fs.boss.repository.TrainingRepository;

@RestController
public class HumanResourcesController {

    @Autowired
    EmployeeProfileRepository employeeProfileRepository;

    @Autowired
    TrainingRepository trainingRepository;

    @Autowired
    DutyStationRepository dutyStationRepository;

    @Autowired
    ContactRepository contactRepository;

    @Autowired
    DeliberativeRiskAssessmentRepository deliberativeRiskAssessmentRepository;

    @Autowired
    DeliberativeRiskAssessmentAircraftRepository deliberativeRiskAssessmentAircraftRepository;

    @Autowired
    ProfilePictureRepository profilePictureRepository;

    @PostMapping("/employeeProfile")
    public ResponseEntity createEmployeeProfile(@Valid @RequestBody EmployeeProfile employeeProfileDetails) {
        employeeProfileDetails = employeeProfileRepository.save(employeeProfileDetails);
        return new ResponseEntity<>(employeeProfileDetails, HttpStatus.OK);

    }

    @DeleteMapping("/employeeProfile/{id}")
    public ResponseEntity<?> deleteEmployeeProfile(@PathVariable(value = "id") Long employeeProfileId) {

        EmployeeProfile pfile = employeeProfileRepository.findById(employeeProfileId)
                .orElseThrow(() -> new ResourceNotFoundException("EmployeeProfile", "id", employeeProfileId));
        employeeProfileRepository.delete(pfile);
        return ResponseEntity.ok().build();

    }

    @JsonView(Views.Internal.class)
    @PutMapping("/employeeProfile/{id}")
    public EmployeeProfile updateEmployeeProfile(@PathVariable(value = "id") Long employeeProfileId,
            @RequestBody EmployeeProfile employeeProfileDetails) {

        employeeProfileRepository.findById(employeeProfileId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("EmployeeProfile", "id", employeeProfileId);
                });

        employeeProfileDetails.getEmployees().forEach((child) -> {
            if (!child.getId().equals(employeeProfileDetails.getId())) {
                List<EmployeeProfile> supervisors = child.getSupervisors();
                if (!supervisors.contains(employeeProfileDetails)) {
                    supervisors.add(employeeProfileDetails);
                    child.setSupervisors(supervisors);
                }
                employeeProfileRepository.save(child);
            }
        });

        EmployeeProfile updatedEmployeeProfile = employeeProfileRepository.save(employeeProfileDetails);
        return updatedEmployeeProfile;

    }

    // Get All Employee Profiles
    @JsonView(Views.Internal.class)
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

    @JsonView(Views.Internal.class)
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

    @GetMapping("/contact")
    public ResponseEntity getAllContacts() {
        return new ResponseEntity<>(contactRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/contact/{id}")
    public Contact getContactById(@PathVariable(value = "id") Long contactId) {
        return contactRepository.findById(contactId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("Contact", "id", contactId);
                });
    }

    @PostMapping("/contact")
    public ResponseEntity createContact(@Valid @RequestBody Contact contact) {
        contact = contactRepository.save(contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @PutMapping("/contact/{id}")
    public Contact updateContact(@PathVariable(value = "id") Long contactId,
            @RequestBody Contact contact) {

        contactRepository.findById(contactId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("EmployeeProfile", "id", contactId);
                });

        return contactRepository.save(contact);

    }

    @GetMapping("/dra")
    public ResponseEntity getAllDeliberativeRiskAssessments(@RequestParam(value = "employee", required = false) final Long employeeProfileId) {
        if (employeeProfileId == null) {
            return new ResponseEntity<>(deliberativeRiskAssessmentRepository.findAll(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(deliberativeRiskAssessmentRepository.findAllByEmployeeProfileId(employeeProfileId), HttpStatus.OK);
        }
    }

    @GetMapping("/dra/{id}")
    public DeliberativeRiskAssessment getDeliberativeRiskAssessmentById(@PathVariable(value = "id") Long deliberativeRiskAssessmentId) {
        return deliberativeRiskAssessmentRepository.findById(deliberativeRiskAssessmentId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("DeliberativeRiskAssessment", "id", deliberativeRiskAssessmentId);
                });
    }

    @PostMapping("/dra")
    public ResponseEntity createDeliberativeRiskAssessment(@Valid @RequestBody DeliberativeRiskAssessment deliberativeRiskAssessment) {
        deliberativeRiskAssessment = deliberativeRiskAssessmentRepository.save(deliberativeRiskAssessment);
        return new ResponseEntity<>(deliberativeRiskAssessment, HttpStatus.OK);

    }

    @PutMapping("/dra/{id}")
    public DeliberativeRiskAssessment updateDeliberativeRiskAssessmentId(@PathVariable(value = "id") Long deliberativeRiskAssessmentId,
            @RequestBody DeliberativeRiskAssessment deliberativeRiskAssessment) {

        deliberativeRiskAssessmentRepository.findById(deliberativeRiskAssessmentId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("DeliberativeRiskAssessment", "id", deliberativeRiskAssessmentId);
                });

        DeliberativeRiskAssessment updatedDeliberativeRiskAssessment = deliberativeRiskAssessmentRepository.save(deliberativeRiskAssessment);
        return updatedDeliberativeRiskAssessment;

    }

    @DeleteMapping("/dra/{id}")
    public ResponseEntity<?> deleteDeliberativeRiskAssessment(@PathVariable(value = "id") Long deliberativeRiskAssessmentId) {

        DeliberativeRiskAssessment dra = deliberativeRiskAssessmentRepository.findById(deliberativeRiskAssessmentId)
                .orElseThrow(() -> new ResourceNotFoundException("DeliberativeRiskAssessment", "id", deliberativeRiskAssessmentId));
        deliberativeRiskAssessmentRepository.delete(dra);
        return ResponseEntity.ok().build();

    }

    @GetMapping("/draAircraft")
    public ResponseEntity getAllDeliberativeRiskAssessmentAircrafts(@RequestParam(value = "employee", required = false) final Long employeeProfileId) {
        return new ResponseEntity<>(deliberativeRiskAssessmentAircraftRepository.findAll(), HttpStatus.OK);

    }

    @GetMapping("/draAircraft/{id}")
    public DeliberativeRiskAssessmentAircraft getDeliberativeRiskAssessmentAircraftById(@PathVariable(value = "id") Long deliberativeRiskAssessmentAircraftId) {
        return deliberativeRiskAssessmentAircraftRepository.findById(deliberativeRiskAssessmentAircraftId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("DeliberativeRiskAssessmentAircraft", "id", deliberativeRiskAssessmentAircraftId);
                });
    }

    @PostMapping("/draAircraft")
    public ResponseEntity createDeliberativeRiskAssessmentAircraft(@Valid @RequestBody DeliberativeRiskAssessmentAircraft deliberativeRiskAssessmentAircraft) {
        deliberativeRiskAssessmentAircraft = deliberativeRiskAssessmentAircraftRepository.save(deliberativeRiskAssessmentAircraft);
        return new ResponseEntity<>(deliberativeRiskAssessmentAircraft, HttpStatus.OK);

    }

    @PutMapping("/draAircraft/{id}")
    public DeliberativeRiskAssessmentAircraft updateDeliberativeRiskAssessmentAircraftId(@PathVariable(value = "id") Long deliberativeRiskAssessmentAircraftId,
            @RequestBody DeliberativeRiskAssessmentAircraft deliberativeRiskAssessmentAircraft) {

        deliberativeRiskAssessmentAircraftRepository.findById(deliberativeRiskAssessmentAircraftId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("DeliberativeRiskAssessmentAircraft", "id", deliberativeRiskAssessmentAircraftId);
                });

        DeliberativeRiskAssessmentAircraft updatedDeliberativeRiskAssessmentAircraft = deliberativeRiskAssessmentAircraftRepository.save(deliberativeRiskAssessmentAircraft);
        return updatedDeliberativeRiskAssessmentAircraft;

    }

    @DeleteMapping("/draAircraft/{id}")
    public ResponseEntity<?> deleteDeliberativeRiskAssessmentAircraft(@PathVariable(value = "id") Long deliberativeRiskAssessmentAircraftId) {

        DeliberativeRiskAssessmentAircraft dra = deliberativeRiskAssessmentAircraftRepository.findById(deliberativeRiskAssessmentAircraftId)
                .orElseThrow(() -> new ResourceNotFoundException("DeliberativeRiskAssessmentAircraft", "id", deliberativeRiskAssessmentAircraftId));
        deliberativeRiskAssessmentAircraftRepository.delete(dra);
        return ResponseEntity.ok().build();

    }

    // Get All Employee Profiles
    @JsonView(Views.Internal.class)
    @GetMapping("/profilePicture/{profilePictureId}")
    public ResponseEntity getProfilePicture(@PathVariable(value = "profilePictureId") final Long profilePictureId) {
        ProfilePicture pic = profilePictureRepository.findById(profilePictureId).orElseThrow(
                () -> new ResourceNotFoundException("ProfilePicture", "profilePictureId", profilePictureId)
        );
        return new ResponseEntity<>("hey: " + profilePictureId.toString(), HttpStatus.OK);
    }
}
