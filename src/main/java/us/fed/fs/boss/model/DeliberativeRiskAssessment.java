package us.fed.fs.boss.model;

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

    @Column(name = "Title")
    private String title;
    
    @Column(name = "YearsValid")
    private Short yearsValid;

    @Column(name = "DateOfAssessment")
    @Temporal(TemporalType.DATE)
    private Date dateOfAssessment;

    @ManyToOne(optional = false)
    @JoinColumn(name = "employee_id")
    @JsonSerialize(using = EmployeeProfileListMinimalSerializer.class)
    private EmployeeProfile employeeProfile;

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
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
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
     * @return the employeeProfile
     */
    public EmployeeProfile getEmployeeProfile() {
        return employeeProfile;
    }

    /**
     * @param employeeProfile the employeeProfile to set
     */
    public void setEmployeeProfile(EmployeeProfile employeeProfile) {
        this.employeeProfile = employeeProfile;
    }

}
