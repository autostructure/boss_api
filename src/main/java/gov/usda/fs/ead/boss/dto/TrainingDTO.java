package gov.usda.fs.ead.boss.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class TrainingDTO implements Serializable {

    private Long id;
    
    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    private EmployeeProfileDTO employee;
    
    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    private EmployeeProfileDTO approvedBy;
    
    private List<CertificateDTO> certificates;
    
    private Long trainingCourseId;
    
    private Date validUntil;
    
    private Date dateOfTraining;

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the employee
     */
    public EmployeeProfileDTO getEmployee() {
        return employee;
    }

    /**
     * @param employee the employee to set
     */
    public void setEmployee(EmployeeProfileDTO employee) {
        this.employee = employee;
    }

    /**
     * @return the approvedBy
     */
    public EmployeeProfileDTO getApprovedBy() {
        return approvedBy;
    }

    /**
     * @param approvedBy the approvedBy to set
     */
    public void setApprovedBy(EmployeeProfileDTO approvedBy) {
        this.approvedBy = approvedBy;
    }
    /**
     * @return the Date it's Valid Until
     */
    public Date getValidUntil() {
        return validUntil;
    }

    /**
     * @param validUntil the Date it's valid until
     */
    public void setValidUntil(Date validUntil) {
        this.validUntil = validUntil;
    }

    /**
     * @return the dateOfTraining
     */
    public Date getDateOfTraining() {
        return dateOfTraining;
    }

    /**
     * @param dateOfTraining the dateOfTraining to set
     */
    public void setDateOfTraining(Date dateOfTraining) {
        this.dateOfTraining = dateOfTraining;
    }

    /**
     * @return the trainingCourseId
     */
    public Long getTrainingCourseId() {
        return trainingCourseId;
    }

    /**
     * @param trainingCourseId the trainingCourseId to set
     */
    public void setTrainingCourseId(Long trainingCourseId) {
        this.trainingCourseId = trainingCourseId;
    }

    /**
     * @return the certificates
     */
    public List<CertificateDTO> getCertificates() {
        return certificates;
    }

    /**
     * @param certificates the certificates to set
     */
    public void setCertificates(List<CertificateDTO> certificates) {
        this.certificates = certificates;
    }
    
}
