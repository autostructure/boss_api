package us.fed.fs.boss.model;

public class Supervisor {

    private Long id;
    private String nameCode;

    public Supervisor(Long id, String nameCode) {
        this.id = id;
        this.nameCode = nameCode;
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
     * @return the nameCode
     */
    public String getNameCode() {
        return nameCode;
    }

    /**
     * @param nameCode the nameCode to set
     */
    public void setNameCode(String nameCode) {
        this.nameCode = nameCode;
    }
}
