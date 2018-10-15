package us.fed.fs.boss.model;


import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "DeliberativeRiskAssessmentCourse")
@EntityListeners(AuditingEntityListener.class)
public class DeliberativeRiskAssessmentCourse implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Category")
    private String category;
    
    @Column(name = "Title")
    private String title;
    
    @Column(name = "Description")
    private String description;
    
    @Column(name = "WiggleRoom")
    private Short wiggleRoom;
    
    @Column(name = "CompleteBy")
    @Temporal(TemporalType.DATE)
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
