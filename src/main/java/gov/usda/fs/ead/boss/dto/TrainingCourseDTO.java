package gov.usda.fs.ead.boss.dto;

import java.io.Serializable;
public class TrainingCourseDTO implements Serializable {

    private Long id;
    private String category;
    private String title;
    private String description;
    private Short defaultYears;
    private Short defaultYearsLeader;

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
     * @return the defaultYears
     */
    public Short getDefaultYears() {
        return defaultYears;
    }

    /**
     * @param defaultYears the defaultYears to set
     */
    public void setDefaultYears(Short defaultYears) {
        this.defaultYears = defaultYears;
    }

    /**
     * @return the defaultYearsLeader
     */
    public Short getDefaultYearsLeader() {
        return defaultYearsLeader;
    }

    /**
     * @param defaultYearsLeader the defaultYearsLeader to set
     */
    public void setDefaultYearsLeader(Short defaultYearsLeader) {
        this.defaultYearsLeader = defaultYearsLeader;
    }
    
    
}
