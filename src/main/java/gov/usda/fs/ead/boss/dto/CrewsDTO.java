package gov.usda.fs.ead.boss.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;

public class CrewsDTO implements Serializable {

   
    private Long id;
    private String description;
    private String name;
    private Boolean isLeader;

    @JsonIgnore
    private EmployeeProfileDTO employeeProfile;

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
    public EmployeeProfileDTO getEmployeeProfile() {
        return employeeProfile;
    }

    /**
     * @param employeeProfile the employeeProfile to set
     */
    public void setEmployeeProfile(EmployeeProfileDTO employeeProfile) {
        this.employeeProfile = employeeProfile;
    }

}
