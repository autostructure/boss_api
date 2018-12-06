package gov.usda.fs.ead.boss.dto;

public class EmployeeProfileMinimalCrewLead {

    private Long id;
    private String email;

    public EmployeeProfileMinimalCrewLead(Long id, String email) {
        this.id = id;
        this.email = email;
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

    /**
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }
}
