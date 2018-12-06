package gov.usda.fs.ead.boss.dto;

import java.io.Serializable;
import java.util.Date;

public class DeliberativeRiskAssessmentCourseDTO implements Serializable {

    private Long id;
    private String category;
    private String title;
    private String description;
    private Short wiggleRoom;
    private Date completeBy;

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
     * @return the category
     */
    public String getCategory() {
        return category;
    }

    /**
     * @param category the category to set
     */
    public void setCategory(String category) {
        this.category = category;
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

    /**
     * @return the completeBy
     */
    public Date getCompleteBy() {
        return completeBy;
    }

    /**
     * @param completeBy the completeBy to set
     */
    public void setCompleteBy(Date completeBy) {
        this.completeBy = completeBy;
    }

    /**
     * @return the wiggleRoom
     */
    public Short getWiggleRoom() {
        return wiggleRoom;
    }

    /**
     * @param wiggleRoom the wiggleRoom to set
     */
    public void setWiggleRoom(Short wiggleRoom) {
        this.wiggleRoom = wiggleRoom;
    }

    
}
