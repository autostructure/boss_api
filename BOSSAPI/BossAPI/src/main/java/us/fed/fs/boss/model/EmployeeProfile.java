package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.Cacheable;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "EmployeeProfiles")
@EntityListeners(AuditingEntityListener.class)
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class EmployeeProfile implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "FirstName")
    private String firstName;

    @Column(name = "LastName")
    private String lastName;

    @Column(name = "MiddleInitial")
    private String middleInitial;

    @Column(name = "PreferredName")
    private String preferredName;

    @Column(name = "NameCode", unique = true, nullable = false)
    private String nameCode;

    @Column(name = "HomePhone")
    private String homePhone;

    @Column(name = "CellPhone")
    private String cellPhone;

    @Column(name = "PersonalEmail")
    private String personalEmail;

    @Column(name = "StateAssigned")
    private String stateAssigned;

    @Column(name = "DutyStation")
    private String dutyStation;

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

    @Column(name = "RoomNumber")
    private String roomNumber;

    @Column(name = "PayPeriodsLeft")
    private Short payPeriodsLeft;

    @Column(name = "RegPayPerPayPeriod")
    private BigDecimal regPayPerPayPeriod;

    @Column(name = "OvertimeHourlyWage")
    private BigDecimal overtimeHourlyWage;

    @Column(name = "PWPSalary")
    private BigDecimal pWPSalary;

    @ManyToOne
    @JoinColumn(name = "ActivityCodeFK")
    private ActivityCode activityCode;

    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;

    @OneToMany(
            mappedBy = "training"
    )
    private List<Training> training;

    @Column(name = "addressCity")
    private String addressCity;

    @Column(name = "series")
    private String series;

    @Column(name = "grade")
    private String grade;

    @Column(name = "payment_plan")
    private String paymentPlan;

    @Column(name = "addressState")
    private String addressState;

    @Column(name = "addressZip")
    private String addressZip;

    @Temporal(TemporalType.DATE)
    private Date confidentialityAgreementDate;

    @Transient
    private Long supervisorId;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "supervisor_id")
    private EmployeeProfile supervisor;

    @OneToMany(mappedBy = "supervisor", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<EmployeeProfile> employees = new HashSet<EmployeeProfile>();

    @JsonIgnore
    @OneToOne(mappedBy = "employeeProfile", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY, optional = false)
    private EmployeeProfilePhoto employeeProfilePhoto;

    @OneToOne(mappedBy = "employeeProfile", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY, optional = false)
    private DriversLicense driversLicense;

    public void setEmployeeProfilePhoto(EmployeeProfilePhoto profilePhoto) {
        this.employeeProfilePhoto = profilePhoto;
    }

    public EmployeeProfilePhoto getEmployeeProfilePhoto() {
        return this.employeeProfilePhoto;
    }

    /**
     * @return the firstName
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * @param firstName the firstName to set
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
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

    /**
     * @return the homePhone
     */
    public String getHomePhone() {
        return homePhone;
    }

    /**
     * @param homePhone the homePhone to set
     */
    public void setHomePhone(String homePhone) {
        this.homePhone = homePhone;
    }

    /**
     * @return the cellPhone
     */
    public String getCellPhone() {
        return cellPhone;
    }

    /**
     * @param cellPhone the cellPhone to set
     */
    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
    }

    /**
     * @return the personalEmail
     */
    public String getPersonalEmail() {
        return personalEmail;
    }

    /**
     * @param personalEmail the personalEmail to set
     */
    public void setPersonalEmail(String personalEmail) {
        this.personalEmail = personalEmail;
    }

    /**
     * @return the stateAssigned
     */
    public String getStateAssigned() {
        return stateAssigned;
    }

    /**
     * @param stateAssigned the stateAssigned to set
     */
    public void setStateAssigned(String stateAssigned) {
        this.stateAssigned = stateAssigned;
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
     * @return the emergencyContactFirstName1
     */
    public String getEmergencyContactFirstName1() {
        return emergencyContactFirstName1;
    }

    /**
     * @param emergencyContactFirstName1 the emergencyContactFirstName1 to set
     */
    public void setEmergencyContactFirstName1(String emergencyContactFirstName1) {
        this.emergencyContactFirstName1 = emergencyContactFirstName1;
    }

    /**
     * @return the emergencyContactLastName1
     */
    public String getEmergencyContactLastName1() {
        return emergencyContactLastName1;
    }

    /**
     * @param emergencyContactLastName1 the emergencyContactLastName1 to set
     */
    public void setEmergencyContactLastName1(String emergencyContactLastName1) {
        this.emergencyContactLastName1 = emergencyContactLastName1;
    }

    /**
     * @return the emergencyContactStreetAddress1
     */
    public String getEmergencyContactStreetAddress1() {
        return emergencyContactStreetAddress1;
    }

    /**
     * @param emergencyContactStreetAddress1 the emergencyContactStreetAddress1
     * to set
     */
    public void setEmergencyContactStreetAddress1(String emergencyContactStreetAddress1) {
        this.emergencyContactStreetAddress1 = emergencyContactStreetAddress1;
    }

    /**
     * @return the emergencyContactCity1
     */
    public String getEmergencyContactCity1() {
        return emergencyContactCity1;
    }

    /**
     * @param emergencyContactCity1 the emergencyContactCity1 to set
     */
    public void setEmergencyContactCity1(String emergencyContactCity1) {
        this.emergencyContactCity1 = emergencyContactCity1;
    }

    /**
     * @return the emergencyContactState1
     */
    public String getEmergencyContactState1() {
        return emergencyContactState1;
    }

    /**
     * @param emergencyContactState1 the emergencyContactState1 to set
     */
    public void setEmergencyContactState1(String emergencyContactState1) {
        this.emergencyContactState1 = emergencyContactState1;
    }

    /**
     * @return the emergencyContactZip1
     */
    public String getEmergencyContactZip1() {
        return emergencyContactZip1;
    }

    /**
     * @param emergencyContactZip1 the emergencyContactZip1 to set
     */
    public void setEmergencyContactZip1(String emergencyContactZip1) {
        this.emergencyContactZip1 = emergencyContactZip1;
    }

    /**
     * @return the emergencyContactHomePhone1
     */
    public String getEmergencyContactHomePhone1() {
        return emergencyContactHomePhone1;
    }

    /**
     * @param emergencyContactHomePhone1 the emergencyContactHomePhone1 to set
     */
    public void setEmergencyContactHomePhone1(String emergencyContactHomePhone1) {
        this.emergencyContactHomePhone1 = emergencyContactHomePhone1;
    }

    /**
     * @return the emergencyContactCellPhone1
     */
    public String getEmergencyContactCellPhone1() {
        return emergencyContactCellPhone1;
    }

    /**
     * @param emergencyContactCellPhone1 the emergencyContactCellPhone1 to set
     */
    public void setEmergencyContactCellPhone1(String emergencyContactCellPhone1) {
        this.emergencyContactCellPhone1 = emergencyContactCellPhone1;
    }

    /**
     * @return the emergencyContactWorkPhone1
     */
    public String getEmergencyContactWorkPhone1() {
        return emergencyContactWorkPhone1;
    }

    /**
     * @param emergencyContactWorkPhone1 the emergencyContactWorkPhone1 to set
     */
    public void setEmergencyContactWorkPhone1(String emergencyContactWorkPhone1) {
        this.emergencyContactWorkPhone1 = emergencyContactWorkPhone1;
    }

    /**
     * @return the emergencyContactRelationship1
     */
    public String getEmergencyContactRelationship1() {
        return emergencyContactRelationship1;
    }

    /**
     * @param emergencyContactRelationship1 the emergencyContactRelationship1 to
     * set
     */
    public void setEmergencyContactRelationship1(String emergencyContactRelationship1) {
        this.emergencyContactRelationship1 = emergencyContactRelationship1;
    }

    /**
     * @return the emergencyContactFirstName2
     */
    public String getEmergencyContactFirstName2() {
        return emergencyContactFirstName2;
    }

    /**
     * @param emergencyContactFirstName2 the emergencyContactFirstName2 to set
     */
    public void setEmergencyContactFirstName2(String emergencyContactFirstName2) {
        this.emergencyContactFirstName2 = emergencyContactFirstName2;
    }

    /**
     * @return the emergencyContactLastName2
     */
    public String getEmergencyContactLastName2() {
        return emergencyContactLastName2;
    }

    /**
     * @param emergencyContactLastName2 the emergencyContactLastName2 to set
     */
    public void setEmergencyContactLastName2(String emergencyContactLastName2) {
        this.emergencyContactLastName2 = emergencyContactLastName2;
    }

    /**
     * @return the emergencyContactStreetAddress2
     */
    public String getEmergencyContactStreetAddress2() {
        return emergencyContactStreetAddress2;
    }

    /**
     * @param emergencyContactStreetAddress2 the emergencyContactStreetAddress2
     * to set
     */
    public void setEmergencyContactStreetAddress2(String emergencyContactStreetAddress2) {
        this.emergencyContactStreetAddress2 = emergencyContactStreetAddress2;
    }

    /**
     * @return the emergencyContactCity2
     */
    public String getEmergencyContactCity2() {
        return emergencyContactCity2;
    }

    /**
     * @param emergencyContactCity2 the emergencyContactCity2 to set
     */
    public void setEmergencyContactCity2(String emergencyContactCity2) {
        this.emergencyContactCity2 = emergencyContactCity2;
    }

    /**
     * @return the emergencyContactState2
     */
    public String getEmergencyContactState2() {
        return emergencyContactState2;
    }

    /**
     * @param emergencyContactState2 the emergencyContactState2 to set
     */
    public void setEmergencyContactState2(String emergencyContactState2) {
        this.emergencyContactState2 = emergencyContactState2;
    }

    /**
     * @return the emergencyContactZip2
     */
    public String getEmergencyContactZip2() {
        return emergencyContactZip2;
    }

    /**
     * @param emergencyContactZip2 the emergencyContactZip2 to set
     */
    public void setEmergencyContactZip2(String emergencyContactZip2) {
        this.emergencyContactZip2 = emergencyContactZip2;
    }

    /**
     * @return the emergencyContactHomePhone2
     */
    public String getEmergencyContactHomePhone2() {
        return emergencyContactHomePhone2;
    }

    /**
     * @param emergencyContactHomePhone2 the emergencyContactHomePhone2 to set
     */
    public void setEmergencyContactHomePhone2(String emergencyContactHomePhone2) {
        this.emergencyContactHomePhone2 = emergencyContactHomePhone2;
    }

    /**
     * @return the emergencyContactCellPhone2
     */
    public String getEmergencyContactCellPhone2() {
        return emergencyContactCellPhone2;
    }

    /**
     * @param emergencyContactCellPhone2 the emergencyContactCellPhone2 to set
     */
    public void setEmergencyContactCellPhone2(String emergencyContactCellPhone2) {
        this.emergencyContactCellPhone2 = emergencyContactCellPhone2;
    }

    /**
     * @return the emergencyContactWorkPhone2
     */
    public String getEmergencyContactWorkPhone2() {
        return emergencyContactWorkPhone2;
    }

    /**
     * @param emergencyContactWorkPhone2 the emergencyContactWorkPhone2 to set
     */
    public void setEmergencyContactWorkPhone2(String emergencyContactWorkPhone2) {
        this.emergencyContactWorkPhone2 = emergencyContactWorkPhone2;
    }

    /**
     * @return the emergencyContactRelationship2
     */
    public String getEmergencyContactRelationship2() {
        return emergencyContactRelationship2;
    }

    /**
     * @param emergencyContactRelationship2 the emergencyContactRelationship2 to
     * set
     */
    public void setEmergencyContactRelationship2(String emergencyContactRelationship2) {
        this.emergencyContactRelationship2 = emergencyContactRelationship2;
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
     * @return the roomNumber
     */
    public String getRoomNumber() {
        return roomNumber;
    }

    /**
     * @param roomNumber the roomNumber to set
     */
    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }

    /**
     * @return the payPeriodsLeft
     */
    public Short getPayPeriodsLeft() {
        return payPeriodsLeft;
    }

    /**
     * @param payPeriodsLeft the payPeriodsLeft to set
     */
    public void setPayPeriodsLeft(Short payPeriodsLeft) {
        this.payPeriodsLeft = payPeriodsLeft;
    }

    /**
     * @return the regPayPerPayPeriod
     */
    public BigDecimal getRegPayPerPayPeriod() {
        return regPayPerPayPeriod;
    }

    /**
     * @param regPayPerPayPeriod the regPayPerPayPeriod to set
     */
    public void setRegPayPerPayPeriod(BigDecimal regPayPerPayPeriod) {
        this.regPayPerPayPeriod = regPayPerPayPeriod;
    }

    /**
     * @return the activityCode
     */
    public ActivityCode getActivityCode() {
        return activityCode;
    }

    /**
     * @param activityCode the activityCode to set
     */
    public void setActivityCode(ActivityCode activityCode) {
        this.activityCode = activityCode;
    }

    /**
     * @return the training
     */
    public List<Training> getTraining() {
        return training;
    }

    /**
     * @param training the training to set
     */
    public void setTraining(List<Training> training) {
        this.training = training;
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
     * @return the overtimeHourlyWage
     */
    public BigDecimal getOvertimeHourlyWage() {
        return overtimeHourlyWage;
    }

    /**
     * @param overtimeHourlyWage the overtimeHourlyWage to set
     */
    public void setOvertimeHourlyWage(BigDecimal overtimeHourlyWage) {
        this.overtimeHourlyWage = overtimeHourlyWage;
    }

    /**
     * @return the pWPSalary
     */
    public BigDecimal getPWPSalary() {
        return pWPSalary;
    }

    /**
     * @param pWPSalary the pWPSalary to set
     */
    public void setPWPSalary(BigDecimal pWPSalary) {
        this.pWPSalary = pWPSalary;
    }

    /**
     * @return the middleInitial
     */
    public String getMiddleInitial() {
        return middleInitial;
    }

    /**
     * @param middleInitial the middleInitial to set
     */
    public void setMiddleInitial(String middleInitial) {
        this.middleInitial = middleInitial;
    }

    /**
     * @return the preferredName
     */
    public String getPreferredName() {
        return preferredName;
    }

    /**
     * @param preferredName the preferredName to set
     */
    public void setPreferredName(String preferredName) {
        this.preferredName = preferredName;
    }

    /**
     * @return the dateOfBirth
     */
    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    /**
     * @param dateOfBirth the dateOfBirth to set
     */
    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    /**
     * @return the addressCity
     */
    public String getAddressCity() {
        return addressCity;
    }

    /**
     * @param addressCity the addressCity to set
     */
    public void setAddressCity(String addressCity) {
        this.addressCity = addressCity;
    }

    /**
     * @return the addressState
     */
    public String getAddressState() {
        return addressState;
    }

    /**
     * @param addressState the addressState to set
     */
    public void setAddressState(String addressState) {
        this.addressState = addressState;
    }

    /**
     * @return the addressZip
     */
    public String getAddressZip() {
        return addressZip;
    }

    /**
     * @param addressZip the addressZip to set
     */
    public void setAddressZip(String addressZip) {
        this.addressZip = addressZip;
    }

    /**
     * @return the series
     */
    public String getSeries() {
        return series;
    }

    /**
     * @param series the series to set
     */
    public void setSeries(String series) {
        this.series = series;
    }

    /**
     * @return the grade
     */
    public String getGrade() {
        return grade;
    }

    /**
     * @param grade the grade to set
     */
    public void setGrade(String grade) {
        this.grade = grade;
    }

    /**
     * @return the paymentPlan
     */
    public String getPaymentPlan() {
        return paymentPlan;
    }

    /**
     * @param paymentPlan the paymentPlan to set
     */
    public void setPaymentPlan(String paymentPlan) {
        this.paymentPlan = paymentPlan;
    }

    /**
     * @return the confidentialityAgreementDate
     */
    public Date getConfidentialityAgreementDate() {
        return confidentialityAgreementDate;
    }

    /**
     * @param confidentialityAgreementDate the confidentialityAgreementDate to
     * set
     */
    public void setConfidentialityAgreementDate(Date confidentialityAgreementDate) {
        this.confidentialityAgreementDate = confidentialityAgreementDate;
    }

    /**
     * @return the driversLicense
     */
    public DriversLicense getDriversLicense() {
        return driversLicense;
    }

    /**
     * @param driversLicense the driversLicense to set
     */
    public void setDriversLicense(DriversLicense driversLicense) {
        this.driversLicense = driversLicense;
    }

    /**
     * @return the employees
     */
    public Set<EmployeeProfile> getEmployees() {
        return employees;
    }

    /**
     * @param employees the employees to set
     */
    public void setEmployees(Set<EmployeeProfile> employees) {
        this.employees = employees;
    }

    /**
     * @return the supervisorId
     */
    public Long getSupervisorId() {
        return supervisorId;
    }

    /**
     * @param supervisorId the supervisorId to set
     */
    public void setSupervisorId(Long supervisorId) {
        this.supervisorId = supervisorId;
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

}
