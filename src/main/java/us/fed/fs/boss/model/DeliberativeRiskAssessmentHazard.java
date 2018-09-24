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
@Table(name = "DeliberativeRiskAssessmentHazard")
@EntityListeners(AuditingEntityListener.class)
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class DeliberativeRiskAssessmentHazard implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "IdentifiedHazards")
    private String identifiedHazards;

    @Column(name = "InitialProposedControlMeasures")
    private String initialProposedControlMeasures;

    @Column(name = "HowToImplementControls")
    private String howToImplementControls;

    @Enumerated(EnumType.STRING)
    @Column(name = "InitialRiskToleranceRating")
    private RiskToleranceRating initialRiskToleranceRating;

    @Enumerated(EnumType.STRING)
    @Column(name = "ResidualRiskToleranceRating")
    private RiskToleranceRating residualRiskToleranceRating;

    @Column(name = "AssignedTo")
    private String assignedTo;

    @JsonBackReference(value = "deliberativeRiskAssessmentHazards")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "deliberativeRiskAssessment")
    private DeliberativeRiskAssessment deliberativeRiskAssessment;

    /**
     * @return the identifiedHazards
     */
    public String getIdentifiedHazards() {
        return identifiedHazards;
    }

    /**
     * @param identifiedHazards the identifiedHazards to set
     */
    public void setIdentifiedHazards(String identifiedHazards) {
        this.identifiedHazards = identifiedHazards;
    }

    /**
     * @return the initialProposedControlMeasures
     */
    public String getInitialProposedControlMeasures() {
        return initialProposedControlMeasures;
    }

    /**
     * @param initialProposedControlMeasures the initialProposedControlMeasures
     * to set
     */
    public void setInitialProposedControlMeasures(String initialProposedControlMeasures) {
        this.initialProposedControlMeasures = initialProposedControlMeasures;
    }

    /**
     * @return the howToImplementControls
     */
    public String getHowToImplementControls() {
        return howToImplementControls;
    }

    /**
     * @param howToImplementControls the howToImplementControls to set
     */
    public void setHowToImplementControls(String howToImplementControls) {
        this.howToImplementControls = howToImplementControls;
    }

    /**
     * @return the initialRiskToleranceRating
     */
    public RiskToleranceRating getInitialRiskToleranceRating() {
        return initialRiskToleranceRating;
    }

    /**
     * @param initialRiskToleranceRating the initialRiskToleranceRating to set
     */
    public void setInitialRiskToleranceRating(RiskToleranceRating initialRiskToleranceRating) {
        this.initialRiskToleranceRating = initialRiskToleranceRating;
    }

    /**
     * @return the residualRiskToleranceRating
     */
    public RiskToleranceRating getResidualRiskToleranceRating() {
        return residualRiskToleranceRating;
    }

    /**
     * @param residualRiskToleranceRating the residualRiskToleranceRating to set
     */
    public void setResidualRiskToleranceRating(RiskToleranceRating residualRiskToleranceRating) {
        this.residualRiskToleranceRating = residualRiskToleranceRating;
    }

    /**
     * @return the assignedTo
     */
    public String getAssignedTo() {
        return assignedTo;
    }

    /**
     * @param assignedTo the assignedTo to set
     */
    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
    }

    /**
     * @return the deliberativeRiskAssessment
     */
    public DeliberativeRiskAssessment getDeliberativeRiskAssessment() {
        return deliberativeRiskAssessment;
    }

    /**
     * @param deliberativeRiskAssessment the deliberativeRiskAssessment to set
     */
    public void setDeliberativeRiskAssessment(DeliberativeRiskAssessment deliberativeRiskAssessment) {
        this.deliberativeRiskAssessment = deliberativeRiskAssessment;
    }

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
}
