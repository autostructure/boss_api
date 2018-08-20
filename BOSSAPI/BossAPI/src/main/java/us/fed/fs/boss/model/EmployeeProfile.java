package us.fed.fs.boss.model;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "EmployeeProfiles")
@EntityListeners(AuditingEntityListener.class)
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Getter
@Setter
@NoArgsConstructor
public class EmployeeProfile implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "FirstName")
    private String firstName;

    @Column(name = "LastName")
    private String lastName;

    @Column(name = "NameCode", unique = true)
    private String nameCode;

    @Column(name = "HomePhone")
    private String homePhone;

    @Column(name = "CellPhone")
    private String cellPhone;

    @Column(name = "PersonalEmail")
    private String personalEmail;

    @Column(name = "StateAssigned")
    private String stateAssigned;

    @Column(name = "EmergencyContactFirstName1")
    private String emergencyContactFirstName1;

    @Column(name = "EmergencyContactLastName1")
    private String emergencyContactLastName1;

    @Column(name = "EmergencyContactStreetAddress1")
    private String emergencyContactStreetAddress1;

    @Column(name = "EmergencyContactCity1")
    private String emergencyContactCity1;

    @Column(name = "EmergencyContactState1")
    private String emergencyContactState1;

    @Column(name = "EmergencyContactZip1")
    private String emergencyContactZip1;

    @Column(name = "EmergencyContactHomePhone1")
    private String emergencyContactHomePhone1;

    @Column(name = "EmergencyContactCellPhone1")
    private String emergencyContactCellPhone1;

    @Column(name = "EmergencyContactWorkPhone1")
    private String emergencyContactWorkPhone1;

    @Column(name = "EmergencyContactRelationship1")
    private String emergencyContactRelationship1;

    @Column(name = "EmergencyContactFirstName2")
    private String emergencyContactFirstName2;

    @Column(name = "EmergencyContactLastName2")
    private String emergencyContactLastName2;

    @Column(name = "EmergencyContactStreetAddress2")
    private String emergencyContactStreetAddress2;

    @Column(name = "EmergencyContactCity2")
    private String emergencyContactCity2;

    @Column(name = "EmergencyContactState2")
    private String emergencyContactState2;

    @Column(name = "EmergencyContactZip2")
    private String emergencyContactZip2;

    @Column(name = "EmergencyContactHomePhone2")
    private String emergencyContactHomePhone2;

    @Column(name = "EmergencyContactCellPhone2")
    private String emergencyContactCellPhone2;

    @Column(name = "EmergencyContactWorkPhone2")
    private String emergencyContactWorkPhone2;

    @Column(name = "EmergencyContactRelationship2")
    private String emergencyContactRelationship2;

    @Column(name = "Title")
    private String title;

    @Column(name = "PayPeriodsLeft")
    private Short payPeriodsLeft;

    @Column(name = "RegPayPerPayPeriod")
    private BigDecimal regPayPerPayPeriod;

    @ManyToOne
    @JoinColumn(name = "ActivityCodeFK")
    private ActivityCode activityCode;

}
