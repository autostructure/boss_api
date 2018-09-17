package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
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
@Table(name = "DeliberativeRiskAssessmentAircraft")
@EntityListeners(AuditingEntityListener.class)
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class DeliberativeRiskAssessmentAircraft implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Description")
    private String description;
    
    @OneToMany(
        mappedBy = "deliberativeRiskAssessmentAircraft",
        cascade = CascadeType.ALL, 
        orphanRemoval = true
    )
    @JsonManagedReference(value="identifiedHazardsAircraft")
    private List<DeliberativeRiskAssessmentAircraftHazard> identifiedHazardsAircraft;
    
    @ManyToOne(optional = false)
    @JoinColumn(name="prepared_by_id")
    @JsonSerialize(using = EmployeeProfileAdminSerializer.class)
    private EmployeeProfile preparedBy;
    
    @Column(name = "PreparedDate")
    @JsonView(Views.Public.class)
    @Temporal(TemporalType.DATE)
    private Date preparedDate;
    
    @ManyToOne(optional = false)
    @JoinColumn(name="reviewed_by_id")
    @JsonSerialize(using = EmployeeProfileAdminSerializer.class)
    private EmployeeProfile reviewedBy;
    
    @Column(name = "ReviewedDate")
    @JsonView(Views.Public.class)
    @Temporal(TemporalType.DATE)
    private Date reviewedDate;
    
    @ManyToOne(optional = false)
    @JsonSerialize(using = EmployeeProfileAdminSerializer.class)
    @JoinColumn(name="approved_by_id")
    private EmployeeProfile approvedBy;
    
    @Column(name = "ApprovedDate")
    @Temporal(TemporalType.DATE)
    private Date approvedDate;
    

    /*
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
     * @return the preparedBy
     */
    public EmployeeProfile getPreparedBy() {
        return preparedBy;
    }

    /**
     * @param preparedBy the preparedBy to set
     */
    public void setPreparedBy(EmployeeProfile preparedBy) {
        this.preparedBy = preparedBy;
    }

    /**
     * @return the preparedDate
     */
    public Date getPreparedDate() {
        return preparedDate;
    }

    /**
     * @param preparedDate the preparedDate to set
     */
    public void setPreparedDate(Date preparedDate) {
        this.preparedDate = preparedDate;
    }

    /**
     * @return the reviewedBy
     */
    public EmployeeProfile getReviewedBy() {
        return reviewedBy;
    }

    /**
     * @param reviewedBy the reviewedBy to set
     */
    public void setReviewedBy(EmployeeProfile reviewedBy) {
        this.reviewedBy = reviewedBy;
    }

    /**
     * @return the reviewedDate
     */
    public Date getReviewedDate() {
        return reviewedDate;
    }

    /**
     * @param reviewedDate the reviewedDate to set
     */
    public void setReviewedDate(Date reviewedDate) {
        this.reviewedDate = reviewedDate;
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
     * @return the approvedDate
     */
    public Date getApprovedDate() {
        return approvedDate;
    }

    /**
     * @param approvedDate the approvedDate to set
     */
    public void setApprovedDate(Date approvedDate) {
        this.approvedDate = approvedDate;
    }

    /**
     * @return the identifiedHazardsAircraft
     */
    public List<DeliberativeRiskAssessmentAircraftHazard> getIdentifiedHazardsAircraft() {
        return identifiedHazardsAircraft;
    }

    /**
     * @param identifiedHazardsAircraft the identifiedHazardsAircraft to set
     */
    public void setIdentifiedHazardsAircraft(List<DeliberativeRiskAssessmentAircraftHazard> identifiedHazardsAircraft) {
        this.identifiedHazardsAircraft = identifiedHazardsAircraft;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }
}
