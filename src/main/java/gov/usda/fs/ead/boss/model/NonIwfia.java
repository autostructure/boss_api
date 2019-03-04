package gov.usda.fs.ead.boss.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.io.Serializable;
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
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "NonIwfia")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class NonIwfia implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "FirstName", nullable = false)
    private String firstName;

    @Column(name = "LastName", nullable = false)
    private String lastName;

    @Column(name = "DutyStation", nullable = false)
    private String dutyStation;

    @Column(name = "Cellphone", nullable = false)
    private String cellphone;

    @Column(name = "OfficePhone", nullable = false)
    private String officePhone;
    
    @Column(name = "Comment", nullable = false)
    private String comment;

    @Column(name = "CrewNumber", nullable = true)
    private String crewNumber;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "Supervisor")
    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    private EmployeeProfile supervisor;

    /**
     * @return the firstName
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * @return the lastName
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * @param lastName the lastName to set
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * @return the dutyStation
     */
    public String getDutyStation() {
        return dutyStation;
    }

    /**
     * @param dutyStation the dutyStation to set
     */
    public void setDutyStation(String dutyStation) {
        this.dutyStation = dutyStation;
    }

    /**
     * @return the cellphone
     */
    public String getCellphone() {
        return cellphone;
    }

    /**
     * @param cellphone the cellphone to set
     */
    public void setCellphone(String cellphone) {
        this.cellphone = cellphone;
    }

    /**
     * @return the officePhone
     */
    public String getOfficePhone() {
        return officePhone;
    }

    /**
     * @param officePhone the officePhone to set
     */
    public void setOfficePhone(String officePhone) {
        this.officePhone = officePhone;
    }

    /**
     * @return the crewNumber
     */
    public String getCrewNumber() {
        return crewNumber;
    }

    /**
     * @param crewNumber the crewNumber to set
     */
    public void setCrewNumber(String crewNumber) {
        this.crewNumber = crewNumber;
    }

    /**
     * @return the supervisor
     */
    public EmployeeProfile getSupervisor() {
        return supervisor;
    }

    /**
     * @param supervisor the supervisor to set
     */
    public void setSupervisor(EmployeeProfile supervisor) {
        this.supervisor = supervisor;
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
     * @return the comment
     */
    public String getComment() {
        return comment;
    }

    /**
     * @param comment the comment to set
     */
    public void setComment(String comment) {
        this.comment = comment;
    }

}
