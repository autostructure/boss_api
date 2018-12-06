package gov.usda.fs.ead.boss.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.io.Serializable;
import java.util.Date;

public class DeliberativeRiskAssessmentDTO implements Serializable {

    private Long id;
    private Short yearsValid;
    private Date dateOfAssessment;
    private Date dateDue;

    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    private EmployeeProfileDTO employee;
    
    private Long deliberativeRiskAssessmentCourseId;

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
     * @return the yearsValid
     */
    public Short getYearsValid() {
        return yearsValid;
    }

    /**
     * @param yearsValid the yearsValid to set
     */
    public void setYearsValid(Short yearsValid) {
        this.yearsValid = yearsValid;
    }

    /**
     * @return the dateOfAssessment
     */
    public Date getDateOfAssessment() {
        return dateOfAssessment;
    }

    /**
     * @param dateOfAssessment the dateOfAssessment to set
     */
    public void setDateOfAssessment(Date dateOfAssessment) {
        this.dateOfAssessment = dateOfAssessment;
    }

    /**
     * @return the deliberativeRiskAssessmentCourseId
     */
    public Long getDeliberativeRiskAssessmentCourseId() {
        return deliberativeRiskAssessmentCourseId;
    }

    /**
     * @param deliberativeRiskAssessmentCourseId the deliberativeRiskAssessmentCourseId to set
     */
    public void setDeliberativeRiskAssessmentCourseId(Long deliberativeRiskAssessmentCourseId) {
        this.deliberativeRiskAssessmentCourseId = deliberativeRiskAssessmentCourseId;
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
     * @return the dateDue
     */
    public Date getDateDue() {
        return dateDue;
    }

    /**
     * @param dateDue the dateDue to set
     */
    public void setDateDue(Date dateDue) {
        this.dateDue = dateDue;
    }

}
