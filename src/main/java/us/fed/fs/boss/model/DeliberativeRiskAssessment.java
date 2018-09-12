package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonView;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Cacheable;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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

    @Column(name = "Activity")
    private String activity;

    @Column(name = "ForestUnit")
    private String forestUnit;

    @Column(name = "InitialAssessment")
    @Temporal(TemporalType.DATE)
    private Date initialAssessment;

    @Column(name = "AssessmentUpdated")
    @Temporal(TemporalType.DATE)
    private Date assessmentUpdated;
    
    @ManyToOne(optional = false)
    @JoinColumn(name="employee_id")
    @JsonView(Views.Public.class)
    private EmployeeProfile employeeProfile;
    
    @OneToMany(
        mappedBy = "deliberativeRiskAssessment",
        cascade = CascadeType.ALL, 
        orphanRemoval = true
    )
    @JsonManagedReference(value="deliberativeRiskAssessmentHazards")
    private List<DeliberativeRiskAssessmentHazard> deliberativeRiskAssessmentHazards;
    

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
     * @return the activity
     */
    public String getActivity() {
        return activity;
    }

    /**
     * @param activity the activity to set
     */
    public void setActivity(String activity) {
        this.activity = activity;
    }

    /**
     * @return the forestUnit
     */
    public String getForestUnit() {
        return forestUnit;
    }

    /**
     * @param forestUnit the forestUnit to set
     */
    public void setForestUnit(String forestUnit) {
        this.forestUnit = forestUnit;
    }

    /**
     * @return the initialAssessment
     */
    public Date getInitialAssessment() {
        return initialAssessment;
    }

    /**
     * @param initialAssessment the initialAssessment to set
     */
    public void setInitialAssessment(Date initialAssessment) {
        this.initialAssessment = initialAssessment;
    }

    /**
     * @return the assessmentUpdated
     */
    public Date getAssessmentUpdated() {
        return assessmentUpdated;
    }

    /**
     * @param assessmentUpdated the assessmentUpdated to set
     */
    public void setAssessmentUpdated(Date assessmentUpdated) {
        this.assessmentUpdated = assessmentUpdated;
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

    /**
     * @return the deliberativeRiskAssessmentHazards
     */
    public List<DeliberativeRiskAssessmentHazard> getDeliberativeRiskAssessmentHazards() {
        return deliberativeRiskAssessmentHazards;
    }

    /**
     * @param deliberativeRiskAssessmentHazards the deliberativeRiskAssessmentHazards to set
     */
    public void setDeliberativeRiskAssessmentHazards(List<DeliberativeRiskAssessmentHazard> deliberativeRiskAssessmentHazards) {
        this.deliberativeRiskAssessmentHazards = deliberativeRiskAssessmentHazards;
    }
}
