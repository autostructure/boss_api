package gov.usda.fs.ead.boss;

import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletResponse;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import gov.usda.fs.ead.boss.exception.ResourceNotFoundException;
import gov.usda.fs.ead.boss.model.Certificate;
import gov.usda.fs.ead.boss.model.Contact;
import gov.usda.fs.ead.boss.model.DeliberativeRiskAssessment;
import gov.usda.fs.ead.boss.model.DeliberativeRiskAssessmentCourse;
import gov.usda.fs.ead.boss.model.DutyStation;
import gov.usda.fs.ead.boss.model.EmployeeProfile;
import gov.usda.fs.ead.boss.model.EmployeeProfileListMinimalSerializer;
import gov.usda.fs.ead.boss.model.UploadedDocument;
import gov.usda.fs.ead.boss.model.Training;
import gov.usda.fs.ead.boss.model.TrainingCourse;
import gov.usda.fs.ead.boss.model.Views;
import gov.usda.fs.ead.boss.repository.CertificateRepository;
import gov.usda.fs.ead.boss.repository.ContactRepository;
import gov.usda.fs.ead.boss.repository.CrewsRepository;
import gov.usda.fs.ead.boss.repository.DeliberativeRiskAssessmentCourseRepository;
import gov.usda.fs.ead.boss.repository.DeliberativeRiskAssessmentRepository;
import gov.usda.fs.ead.boss.repository.DutyStationRepository;
import gov.usda.fs.ead.boss.repository.EmployeeProfileRepository;
import gov.usda.fs.ead.boss.repository.TrainingCourseRepository;
import gov.usda.fs.ead.boss.repository.TrainingRepository;
import gov.usda.fs.ead.boss.repository.UploadedDocumentRepository;
import gov.usda.fs.ead.boss.upload.UploadFileResponse;
import gov.usda.fs.ead.boss.upload.UploadService;

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
    CrewsRepository crewsRepository;

    @Autowired
    TrainingCourseRepository trainingCourseRepository;

    @Autowired
    CertificateRepository certificateRepository;

    @Autowired
    DeliberativeRiskAssessmentRepository deliberativeRiskAssessmentRepository;

    @Autowired
    DeliberativeRiskAssessmentCourseRepository deliberativeRiskAssessmentCourseRepository;

    @Autowired
    UploadedDocumentRepository uploadedDocumentRepository;

    @Autowired
    UploadService uploadService;
    
    @Autowired
    private IAuthenticationFacade authenticationFacade;

    @GetMapping("/userEmail")
    public ResponseEntity getUserEmailEndpoint() {
        String email = AuthUtils.getProfile(authenticationFacade).getFsEmail();
        return new ResponseEntity<>(email, HttpStatus.OK);
    }

    @GetMapping("/myRoles")
    public ResponseEntity getMyRoles() {
        List<String> roles = AuthUtils.getRoles(authenticationFacade);
        return new ResponseEntity<>(roles, HttpStatus.OK);
    }

    @GetMapping("/myProfile")
    public ResponseEntity getMyUserProfile() {
        EmployeeProfile p = AuthUtils.getProfile(authenticationFacade);
        return new ResponseEntity<>(p, HttpStatus.OK);
    }

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
                EmployeeProfile supervisor = child.getSupervisor();
                child.setSupervisor(employeeProfileDetails);
                employeeProfileRepository.save(child);
            }
        });

        EmployeeProfile updatedEmployeeProfile = employeeProfileRepository.save(employeeProfileDetails);
        return updatedEmployeeProfile;

    }

    // Get All Employee Profiles
    @GetMapping("/employeeProfile")
    @JsonSerialize(using = EmployeeProfileListMinimalSerializer.class)
    public ResponseEntity getAllEmployeeProfiles(@RequestParam(value = "nameCode", required = false) final String nameCode) {
        List<EmployeeProfile> ps = employeeProfileRepository.findAll();
        return new ResponseEntity<>(ps, HttpStatus.OK);

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

    // Training 
    @GetMapping("/training")
    public ResponseEntity getAllTrainings(
            @RequestParam(value = "employeeId", required = false) final Long employeeId,
            @RequestParam(value = "trainingCourseId", required = false) final Long trainingCourseId) {

        boolean justEmployee = employeeId != null && trainingCourseId == null;
        boolean justCourse = employeeId == null && trainingCourseId != null;
        boolean both = employeeId != null && trainingCourseId != null;

        if (justCourse) {
            return new ResponseEntity<>(trainingRepository.findAllByTrainingCourseId(trainingCourseId), HttpStatus.OK);
        } else if (justEmployee) {
            return new ResponseEntity<>(trainingRepository.findAllByEmployeeId(employeeId), HttpStatus.OK);
        } else if (both) {
            return new ResponseEntity<>(trainingRepository.findAllByEmployeeIdAndTrainingCourseId(employeeId, trainingCourseId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(trainingRepository.findAll(), HttpStatus.OK);

        }

    }

    @GetMapping("/training/{id}")
    public Training getTrainingById(@PathVariable(value = "id") Long trainingId) {
        return trainingRepository.findById(trainingId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("Training", "id", trainingId);
                });
    }

    @PostMapping("/training")
    public ResponseEntity createTraining(@Valid @RequestBody Training training) {
        training = trainingRepository.save(training);
        return new ResponseEntity<>(training, HttpStatus.OK);

    }

    @PutMapping("/training/{id}")
    public Training updateTraining(@PathVariable(value = "id") Long trainingId,
            @RequestBody Training training) {

        employeeProfileRepository.findById(trainingId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("Training", "id", trainingId);
                });
        Training updatedTraining = trainingRepository.save(training);
        return updatedTraining;

    }

    @DeleteMapping("/training/{id}")
    public ResponseEntity<?> deleteTraining(@PathVariable(value = "id") Long trainingId) {

        Training pfile = trainingRepository.findById(trainingId)
                .orElseThrow(() -> new ResourceNotFoundException("Training", "id", trainingId));
        trainingRepository.delete(pfile);
        return ResponseEntity.ok().build();

    }

    // Training Courses 
    @GetMapping("/trainingCourse")
    public ResponseEntity getAllTrainingCourses() {

        return new ResponseEntity<>(trainingCourseRepository.findAll(), HttpStatus.OK);

    }

    @GetMapping("/trainingCourse/{id}")
    public TrainingCourse getTrainingCourseById(@PathVariable(value = "id") Long trainingCourseId) {
        return trainingCourseRepository.findById(trainingCourseId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("TrainingCourse", "id", trainingCourseId);
                });
    }

    @PostMapping("/trainingCourse")
    public ResponseEntity createTrainingCourse(@Valid @RequestBody TrainingCourse trainingCourse) {
        trainingCourse = trainingCourseRepository.save(trainingCourse);
        return new ResponseEntity<>(trainingCourse, HttpStatus.OK);

    }

    @PutMapping("/trainingCourse/{id}")
    public TrainingCourse updateTrainingCourse(@PathVariable(value = "id") Long trainingCourseId,
            @RequestBody TrainingCourse trainingCourse) {

        employeeProfileRepository.findById(trainingCourseId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("TrainingCourse", "id", trainingCourseId);
                });
        TrainingCourse updatedTrainingCourse = trainingCourseRepository.save(trainingCourse);
        return updatedTrainingCourse;

    }

    @DeleteMapping("/trainingCourse/{id}")
    public ResponseEntity<?> deleteTrainingCourse(@PathVariable(value = "id") Long trainingCourseId) {

        TrainingCourse pfile = trainingCourseRepository.findById(trainingCourseId)
                .orElseThrow(() -> new ResourceNotFoundException("TrainingCourse", "id", trainingCourseId));
        trainingCourseRepository.delete(pfile);
        return ResponseEntity.ok().build();

    }

    // General Contacts 
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

    // DeliberativeRiskAssessment 
    @GetMapping("/dra")
    public ResponseEntity getAllDeliberativeRiskAssessments(
            @RequestParam(value = "employeeId", required = false) final Long employeeId,
            @RequestParam(value = "deliberativeRiskAssessmentCourseId", required = false) final Long deliberativeRiskAssessmentCourseId) {

        boolean justEmployee = employeeId != null && deliberativeRiskAssessmentCourseId == null;
        boolean justCourse = employeeId == null && deliberativeRiskAssessmentCourseId != null;
        boolean both = employeeId != null && deliberativeRiskAssessmentCourseId != null;

        if (justCourse) {
            return new ResponseEntity<>(deliberativeRiskAssessmentRepository.findAllByDeliberativeRiskAssessmentCourseId(deliberativeRiskAssessmentCourseId), HttpStatus.OK);
        } else if (justEmployee) {
            return new ResponseEntity<>(deliberativeRiskAssessmentRepository.findAllByEmployeeId(employeeId), HttpStatus.OK);
        } else if (both) {
            return new ResponseEntity<>(deliberativeRiskAssessmentRepository.findAllByEmployeeIdAndDeliberativeRiskAssessmentCourseId(employeeId, employeeId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(deliberativeRiskAssessmentRepository.findAll(), HttpStatus.OK);
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
    public DeliberativeRiskAssessment updateDeliberativeRiskAssessment(@PathVariable(value = "id") Long deliberativeRiskAssessmentId,
            @RequestBody DeliberativeRiskAssessment deliberativeRiskAssessment) {

        employeeProfileRepository.findById(deliberativeRiskAssessmentId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("DeliberativeRiskAssessment", "id", deliberativeRiskAssessmentId);
                });
        DeliberativeRiskAssessment updatedDeliberativeRiskAssessment = deliberativeRiskAssessmentRepository.save(deliberativeRiskAssessment);
        return updatedDeliberativeRiskAssessment;

    }

    @DeleteMapping("/dra/{id}")
    public ResponseEntity<?> deleteDeliberativeRiskAssessment(@PathVariable(value = "id") Long deliberativeRiskAssessmentId) {

        DeliberativeRiskAssessment pfile = deliberativeRiskAssessmentRepository.findById(deliberativeRiskAssessmentId)
                .orElseThrow(() -> new ResourceNotFoundException("DeliberativeRiskAssessment", "id", deliberativeRiskAssessmentId));
        deliberativeRiskAssessmentRepository.delete(pfile);
        return ResponseEntity.ok().build();

    }

    // DeliberativeRiskAssessment Courses 
    @GetMapping("/draCourse")
    public ResponseEntity getAllDeliberativeRiskAssessmentCourses() {

        return new ResponseEntity<>(deliberativeRiskAssessmentCourseRepository.findAll(), HttpStatus.OK);

    }

    @GetMapping("/draCourse/{id}")
    public DeliberativeRiskAssessmentCourse getDeliberativeRiskAssessmentCourseById(@PathVariable(value = "id") Long deliberativeRiskAssessmentCourseId) {
        return deliberativeRiskAssessmentCourseRepository.findById(deliberativeRiskAssessmentCourseId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("DeliberativeRiskAssessmentCourse", "id", deliberativeRiskAssessmentCourseId);
                });
    }

    @PostMapping("/draCourse")
    public ResponseEntity createDeliberativeRiskAssessmentCourse(@Valid @RequestBody DeliberativeRiskAssessmentCourse deliberativeRiskAssessmentCourse) {
        deliberativeRiskAssessmentCourse = deliberativeRiskAssessmentCourseRepository.save(deliberativeRiskAssessmentCourse);
        return new ResponseEntity<>(deliberativeRiskAssessmentCourse, HttpStatus.OK);

    }

    @PutMapping("/draCourse/{id}")
    public DeliberativeRiskAssessmentCourse updateDeliberativeRiskAssessmentCourse(@PathVariable(value = "id") Long deliberativeRiskAssessmentCourseId,
            @RequestBody DeliberativeRiskAssessmentCourse deliberativeRiskAssessmentCourse) {

        employeeProfileRepository.findById(deliberativeRiskAssessmentCourseId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("DeliberativeRiskAssessmentCourse", "id", deliberativeRiskAssessmentCourseId);
                });
        DeliberativeRiskAssessmentCourse updatedDeliberativeRiskAssessmentCourse = deliberativeRiskAssessmentCourseRepository.save(deliberativeRiskAssessmentCourse);
        return updatedDeliberativeRiskAssessmentCourse;

    }

    @DeleteMapping("/draCourse/{id}")
    public ResponseEntity<?> deleteDeliberativeRiskAssessmentCourse(@PathVariable(value = "id") Long deliberativeRiskAssessmentCourseId) {

        DeliberativeRiskAssessmentCourse pfile = deliberativeRiskAssessmentCourseRepository.findById(deliberativeRiskAssessmentCourseId)
                .orElseThrow(() -> new ResourceNotFoundException("DeliberativeRiskAssessmentCourse", "id", deliberativeRiskAssessmentCourseId));
        deliberativeRiskAssessmentCourseRepository.delete(pfile);
        return ResponseEntity.ok().build();

    }

    @PostMapping("/profilePicture")
    public ResponseEntity uploadFile(@RequestParam("file") MultipartFile file, @RequestParam(value = "employeeId", required = true) final Long employeeProfileId) {

        try {

            EmployeeProfile profile = employeeProfileRepository.findById(employeeProfileId)
                    .orElseThrow(() -> {
                        return new ResourceNotFoundException("EmployeeProfile", "id", employeeProfileId);
                    });

            String fileName = file.getOriginalFilename();
            File convFile = new File(fileName);
            convFile.createNewFile();
            try (FileOutputStream fos = new FileOutputStream(convFile)) {
                fos.write(file.getBytes());
            }

            String type = file.getContentType();
            if (type == null) {
                return ResponseEntity.status(400).body("Bad Image Format");
            }
            switch (type) {
                case MediaType.IMAGE_JPEG_VALUE:
                case MediaType.IMAGE_PNG_VALUE:
                    CompletableFuture<Long> future = uploadService.upload(convFile, "profilePicture", file.getContentType());
                    Long imageId = future.get();
                    profile.setProfilePicture(imageId);
                    employeeProfileRepository.save(profile);
                    String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                            .path("/profilePicture/")
                            .path(imageId.toString())
                            .toUriString();

                    UploadFileResponse resp = new UploadFileResponse(fileName, fileDownloadUri,
                            file.getContentType(), file.getSize());

                    return new ResponseEntity<>(resp, HttpStatus.OK);
                default:
                    return ResponseEntity.status(400).body("Bad Image Format. Please use only JPEG or PNG.");

            }

        } catch (IOException | InterruptedException | ExecutionException ex) {
            Logger.getLogger(HumanResourcesController.class.getName()).log(Level.SEVERE, null, ex);
            return ResponseEntity.status(500).body(ex.getLocalizedMessage());
        }
    }

    @GetMapping("/profilePicture/{profilePictureId}")
    public ResponseEntity downloadProfilePicture(@PathVariable Long profilePictureId, HttpServletResponse response) {
        try {
            // Load file as Resource
            UploadedDocument doc = uploadService.getUploadedDocument(profilePictureId).get();

            final HttpHeaders headers = new HttpHeaders();

            String type = doc.getFileType().toLowerCase();

            if (type.contains("jpg") || type.contains("jpeg")) {
                headers.setContentType(MediaType.IMAGE_JPEG);
            }

            if (type.contains("png")) {
                headers.setContentType(MediaType.IMAGE_PNG);
            }

            return new ResponseEntity<byte[]>(doc.getData(), headers, HttpStatus.CREATED);

        } catch (InterruptedException | ExecutionException ex) {
            Logger.getLogger(HumanResourcesController.class.getName()).log(Level.SEVERE, null, ex);
            return ResponseEntity.status(500).body(ex.getLocalizedMessage());

        }
    }

    @PostMapping("/certificate")
    public ResponseEntity uploadCertificate(@RequestParam("file") MultipartFile file, @RequestParam(value = "trainingId", required = false) final Long trainingId,
            @RequestParam(value = "description", required = false) final String description) {

        try {

            Training training = trainingRepository.findById(trainingId)
                    .orElseThrow(() -> {
                        return new ResourceNotFoundException("Training", "id", trainingId);
                    });

            String fileName = file.getOriginalFilename();
            File convFile = new File(fileName);
            convFile.createNewFile();
            try (FileOutputStream fos = new FileOutputStream(convFile)) {
                fos.write(file.getBytes());
            }

            String type = file.getContentType();
            if (type == null) {
                return ResponseEntity.status(400).body("Bad Image Format");
            }
            switch (type) {
                case MediaType.IMAGE_JPEG_VALUE:
                case MediaType.IMAGE_PNG_VALUE:
                case MediaType.APPLICATION_PDF_VALUE:
                    CompletableFuture<Long> future = uploadService.upload(convFile, "certificate", file.getContentType());
                    Long imageId = future.get();

                    List<Certificate> certs = training.getCertificates();

                    Certificate cert = new Certificate();
                    cert.setDocumentId(imageId);
                    cert.setEmployee(training);
                    cert.setDescription(description != null ? description : "");
                    certs.add(cert);
                    training.setCertificates(certs);

                    trainingRepository.save(training);

                    String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                            .path("/certificate/")
                            .path(imageId.toString())
                            .toUriString();

                    UploadFileResponse resp = new UploadFileResponse(fileName, fileDownloadUri,
                            file.getContentType(), file.getSize());

                    return new ResponseEntity<>(resp, HttpStatus.OK);
                default:
                    return ResponseEntity.status(400).body("Bad File Format. Please Use Only JPEG, PNG OR PDF");

            }

        } catch (IOException | InterruptedException | ExecutionException ex) {
            Logger.getLogger(HumanResourcesController.class.getName()).log(Level.SEVERE, null, ex);
            return ResponseEntity.status(500).body(ex.getLocalizedMessage());
        }
    }

    @GetMapping("/certificate/{certificateId}")
    public ResponseEntity downloadCertificate(@PathVariable Long certificateId, HttpServletResponse response) {
        try {
            // Load file as Resource
            UploadedDocument doc = uploadService.getUploadedDocument(certificateId).get();

            final HttpHeaders headers = new HttpHeaders();

            String type = doc.getFileType().toLowerCase();

            if (type.contains("jpg") || type.contains("jpeg")) {
                headers.setContentType(MediaType.IMAGE_JPEG);
            }

            if (type.contains("png")) {
                headers.setContentType(MediaType.IMAGE_PNG);
            }

            if (type.contains("pdf")) {
                headers.setContentType(MediaType.APPLICATION_PDF);
            }

            return new ResponseEntity<byte[]>(doc.getData(), headers, HttpStatus.CREATED);

        } catch (InterruptedException | ExecutionException ex) {
            Logger.getLogger(HumanResourcesController.class.getName()).log(Level.SEVERE, null, ex);
            return ResponseEntity.status(500).body(ex.getLocalizedMessage());

        }
    }

    @DeleteMapping("/certificate/{id}")
    public ResponseEntity<?> deleteCertificate(@PathVariable(value = "id") Long certificateId) {

        Certificate cert = certificateRepository.findById(certificateId)
                .orElseThrow(() -> new ResourceNotFoundException("Certificate", "id", certificateId));

        uploadedDocumentRepository.deleteById(cert.getDocumentId());
        certificateRepository.delete(cert);

        return ResponseEntity.ok().build();

    }
}
