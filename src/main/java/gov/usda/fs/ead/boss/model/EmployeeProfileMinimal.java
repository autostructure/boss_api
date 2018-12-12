package gov.usda.fs.ead.boss.model;

public class EmployeeProfileMinimal {

    private Long id;
    private String fsEmail;

    public EmployeeProfileMinimal(Long id, String fsEmail) {
        this.id = id;
        this.fsEmail = fsEmail;
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
     * @return the fsEmail
     */
    public String getFsEmail() {
        return fsEmail;
    }

    /**
     * @param fsEmail the fsEmail to set
     */
    public void setFsEmail(String fsEmail) {
        this.fsEmail = fsEmail;
    }

}
