package gov.usda.fs.ead.boss.model;

public class EmployeeProfileMinimal {

    private Long id;

    public EmployeeProfileMinimal(Long id) {
        this.id = id;
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

}
