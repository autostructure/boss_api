package gov.usda.fs.ead.boss.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "DeliberativeRiskAssessment")
@EntityListeners(AuditingEntityListener.class)
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class DeliberativeRiskAssessment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "YearsValid")
    private Short yearsValid;

    @Column(name = "DateOfAssessment")
    @Temporal(TemporalType.DATE)
    private Date dateOfAssessment;
    
    @Column(name = "DateDue")
    @Temporal(TemporalType.DATE)
    private Date dateDue;

    @ManyToOne(optional = false)
    @JoinColumn(name = "employee")
    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    private EmployeeProfile employee;
    
    @Column(name="DeliberativeRiskAssessmentCourseId")
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
    public EmployeeProfile getEmployee() {
        return employee;
    }

    /**
     * @param employee the employee to set
     */
    public void setEmployee(EmployeeProfile employee) {
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
