package gov.usda.fs.ead.boss.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Training")
@EntityListeners(AuditingEntityListener.class)
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Training implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee")
    private EmployeeProfile employee;
    
    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    @OneToOne
    @JoinColumn(name="ApprovedById")
    private EmployeeProfile approvedBy;
    
    @OneToMany(
            mappedBy = "training",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Certificate> certificates;
    
    @Column(name="TrainingCourseId")
    private Long trainingCourseId;
    
    @Temporal(TemporalType.DATE)
    @Column(name="ValidUntil")
    private Date validUntil;
    
    @Temporal(TemporalType.DATE)
    @Column(name = "DateOfTraining")
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
     * @return the approvedBy
     */
    public EmployeeProfile getApprovedBy() {
        return approvedBy;
    }

    /**
     * @param approvedBy the approvedBy to set
     */
    public void setApprovedBy(EmployeeProfile approvedBy) {
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
    public List<Certificate> getCertificates() {
        return certificates;
    }

    /**
     * @param certificates the certificates to set
     */
    public void setCertificates(List<Certificate> certificates) {
        this.certificates = certificates;
    }
    
}
