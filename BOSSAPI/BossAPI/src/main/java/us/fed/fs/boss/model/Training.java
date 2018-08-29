package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Training")
@JsonInclude(JsonInclude.Include.NON_NULL)
@EntityListeners(AuditingEntityListener.class)
public class Training implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "YearsValid")
    private Short yearsValid;
    
    @Column(name = "Hours")
    private Short hours;
    
    @Column(name = "Location")
    private String location;
    
     @Column(name = "Presenter")
    private String presenter;
     
    @Column(name = "Title")
    private String title;
    
    @Temporal(TemporalType.DATE)
    @Column(name = "DateOfTraining")
    private Date dateOfTraining;
    
    @JsonBackReference(value="training")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="training")
    private Training training;

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
     * @return the yearsValid
     */
    public Short getYearsValid() {
        return yearsValid;
    }

    /**
     * @param yearsValid the yearsValid to set
     */
    public void setYearsValid(Short yearsValid) {
        this.yearsValid = yearsValid;
    }

    /**
     * @return the hours
     */
    public Short getHours() {
        return hours;
    }

    /**
     * @param hours the hours to set
     */
    public void setHours(Short hours) {
        this.hours = hours;
    }

    /**
     * @return the location
     */
    public String getLocation() {
        return location;
    }

    /**
     * @param location the location to set
     */
    public void setLocation(String location) {
        this.location = location;
    }

    /**
     * @return the presenter
     */
    public String getPresenter() {
        return presenter;
    }

    /**
     * @param presenter the presenter to set
     */
    public void setPresenter(String presenter) {
        this.presenter = presenter;
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
     * @return the training
     */
    public Training getTraining() {
        return training;
    }

    /**
     * @param training the training to set
     */
    public void setTraining(Training training) {
        this.training = training;
    }

}
