package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Crews")
@EntityListeners(AuditingEntityListener.class)
public class Crews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Description")
    private String description;
    
    @Column(name = "Name")
    private String name;
    
    @Column(name = "IsLeader")
    private Boolean isLeader;
    
    @ManyToOne
    @JoinColumn(name = "EmployeeProfileFK")
    @JsonIgnore
    private EmployeeProfile employeeProfile;

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
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the isLeader
     */
    public Boolean getIsLeader() {
        return isLeader;
    }

    /**
     * @param isLeader the isLeader to set
     */
    public void setIsLeader(Boolean isLeader) {
        this.isLeader = isLeader;
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
    
}
