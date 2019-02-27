package gov.usda.fs.ead.boss.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "CardOrKey")
@JsonInclude(JsonInclude.Include.NON_NULL)
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class CardOrKey implements Serializable {

    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "GovtId")
    private String govtId;
    
    @Enumerated(EnumType.STRING)
    @Column(name="KeyType")
    private KeyType keyType;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "AssignedTo")
    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    private EmployeeProfile assignedTo;

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
     * @return the govtId
     */
    public String getGovtId() {
        return govtId;
    }

    /**
     * @param govtId the govtId to set
     */
    public void setGovtId(String govtId) {
        this.govtId = govtId;
    }

    /**
     * @return the keyType
     */
    public KeyType getKeyType() {
        return keyType;
    }

    /**
     * @param keyType the keyType to set
     */
    public void setKeyType(KeyType keyType) {
        this.keyType = keyType;
    }

    /**
     * @return the assignedTo
     */
    public EmployeeProfile getAssignedTo() {
        return assignedTo;
    }

    /**
     * @param assignedTo the assignedTo to set
     */
    public void setAssignedTo(EmployeeProfile assignedTo) {
        this.assignedTo = assignedTo;
    }

}
