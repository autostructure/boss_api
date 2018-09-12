package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import java.io.Serializable;
import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "DeliberativeRiskAssessmentAircraftHazard")
@EntityListeners(AuditingEntityListener.class)
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class DeliberativeRiskAssessmentAircraftHazard implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "PreMitigationRiskToleranceRating")
    private RiskToleranceRatingAircraft preMitigationRiskToleranceRating;

    @Enumerated(EnumType.STRING)
    @Column(name = "PostMitigationRiskToleranceRating")
    private RiskToleranceRatingAircraft postMitigationRiskToleranceRating;

    @Enumerated(EnumType.STRING)
    @Column(name = "PostMitigationValue")
    private RiskToleranceRatingAircraft postMitigationValue;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "System")
    private SystemAircraft system;

    @Enumerated(EnumType.STRING)
    @Column(name = "SubSystem")
    private SubSystemAircraft subSystem;
    
    @JsonBackReference(value="identifiedHazardsAircraft")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="deliberativeRiskAssessmentAircraft")
    private DeliberativeRiskAssessment deliberativeRiskAssessmentAircraft;

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
     * @return the preMitigationRiskToleranceRating
     */
    public RiskToleranceRatingAircraft getPreMitigationRiskToleranceRating() {
        return preMitigationRiskToleranceRating;
    }

    /**
     * @param preMitigationRiskToleranceRating the
     * preMitigationRiskToleranceRating to set
     */
    public void setPreMitigationRiskToleranceRating(RiskToleranceRatingAircraft preMitigationRiskToleranceRating) {
        this.preMitigationRiskToleranceRating = preMitigationRiskToleranceRating;
    }

    /**
     * @return the postMitigationRiskToleranceRating
     */
    public RiskToleranceRatingAircraft getPostMitigationRiskToleranceRating() {
        return postMitigationRiskToleranceRating;
    }

    /**
     * @param postMitigationRiskToleranceRating the
     * postMitigationRiskToleranceRating to set
     */
    public void setPostMitigationRiskToleranceRating(RiskToleranceRatingAircraft postMitigationRiskToleranceRating) {
        this.postMitigationRiskToleranceRating = postMitigationRiskToleranceRating;
    }

    /**
     * @return the postMitigationValue
     */
    public RiskToleranceRatingAircraft getPostMitigationValue() {
        return postMitigationValue;
    }

    /**
     * @param postMitigationValue the postMitigationValue to set
     */
    public void setPostMitigationValue(RiskToleranceRatingAircraft postMitigationValue) {
        this.postMitigationValue = postMitigationValue;
    }

    /**
     * @return the subSystem
     */
    public SubSystemAircraft getSubSystem() {
        return subSystem;
    }

    /**
     * @param subSystem the subSystem to set
     */
    public void setSubSystem(SubSystemAircraft subSystem) {
        this.subSystem = subSystem;
    }

    /**
     * @return the deliberativeRiskAssessmentAircraft
     */
    public DeliberativeRiskAssessment getDeliberativeRiskAssessmentAircraft() {
        return deliberativeRiskAssessmentAircraft;
    }

    /**
     * @param deliberativeRiskAssessmentAircraft the deliberativeRiskAssessmentAircraft to set
     */
    public void setDeliberativeRiskAssessmentAircraft(DeliberativeRiskAssessment deliberativeRiskAssessmentAircraft) {
        this.deliberativeRiskAssessmentAircraft = deliberativeRiskAssessmentAircraft;
    }

    /**
     * @return the system
     */
    public SystemAircraft getSystem() {
        return system;
    }

    /**
     * @param system the system to set
     */
    public void setSystem(SystemAircraft system) {
        this.system = system;
    }
}
