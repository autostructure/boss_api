package gov.usda.fs.ead.boss.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;

public class CertificateDTO implements Serializable {

    private Long id;
    private Long documentId;
    private String description;

    @JsonIgnore
    private TrainingDTO training;

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
     * @return the documentId
     */
    public Long getDocumentId() {
        return documentId;
    }

    /**
     * @param documentId the documentId to set
     */
    public void setDocumentId(Long documentId) {
        this.documentId = documentId;
    }

    /**
     * @return the training
     */
    public TrainingDTO getEmployee() {
        return training;
    }

    /**
     * @param training the training to set
     */
    public void setEmployee(TrainingDTO training) {
        this.training = training;
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
