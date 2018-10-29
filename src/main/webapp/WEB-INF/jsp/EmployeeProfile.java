package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.util.ArrayList;
import java.math.BigDecimal;
import java.util.Date;
import java.io.Serializable;

import java.util.List;

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

import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "EmployeeProfiles")
@EntityListeners(AuditingEntityListener.class)
@Cacheable
@DynamicUpdate
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class EmployeeProfile implements Serializable {

    @Id
    @Column(name = "employee_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(Views.Minimal.class)
    private Long id;

    @Column(name = "FirstName")
    @JsonView(Views.Public.class)
    private String firstName;

    @Column(name = "LastName")
    @JsonView(Views.Public.class)
    private String lastName;

    @Column(name = "MiddleInitial")
    @JsonView(Views.Public.class)
    private String middleInitial;

    @Column(name = "PreferredName")
    @JsonView(Views.Internal.class)
    private String preferredName;

    @Column(name = "NameCode", unique = true, nullable = false)
    @JsonView(Views.Minimal.class)
    private String nameCode;

    @Column(name = "ProfilePicture", unique = false, nullable = true)
    @JsonView(Views.Minimal.class)
    private Long profilePicture;

    @Column(name = "HomePhone")
    @JsonView(Views.Internal.class)
    private String homePhone;

    @Column(name = "CellPhone")
    @JsonView(Views.Internal.class)
    private String cellPhone;

    @Column(name = "OfficePhone")
    @JsonView(Views.Internal.class)
    private String officePhone;    

    @Column(name = "PersonalEmail")
    @JsonView(Views.Internal.class)
    private String personalEmail;

    @Column(name = "StateAssigned")
    @JsonView(Views.Internal.class)
    private String stateAssigned;

    @Column(name = "DutyStation")
    @JsonView(Views.Public.class)
    private String dutyStation;

    @Column(name = "EmergencyContactFirstName1")
    @JsonView(Views.Internal.class)
    private String emergencyContactFirstName1;

    @Column(name = "EmergencyContactLastName1")
    @JsonView(Views.Internal.class)
    private String emergencyContactLastName1;

    @Column(name = "EmergencyContactStreetAddress1")
    @JsonView(Views.Internal.class)
    private String emergencyContactStreetAddress1;

    @Column(name = "EmergencyContactCity1")
    @JsonView(Views.Internal.class)
    private String emergencyContactCity1;

    @Column(name = "EmergencyContactState1")
    @JsonView(Views.Internal.class)
    private String emergencyContactState1;

    @Column(name = "EmergencyContactZip1")
    @JsonView(Views.Internal.class)
    private String emergencyContactZip1;

    @Column(name = "EmergencyContactHomePhone1")
    @JsonView(Views.Internal.class)
    private String emergencyContactHomePhone1;

    @Column(name = "EmergencyContactCellPhone1")
    @JsonView(Views.Internal.class)
    private String emergencyContactCellPhone1;

    @Column(name = "EmergencyContactWorkPhone1")
    @JsonView(Views.Internal.class)
    private String emergencyContactWorkPhone1;

    @Column(name = "EmergencyContactRelationship1")
    @JsonView(Views.Internal.class)
    private String emergencyContactRelationship1;

    @Column(name = "EmergencyContactFirstName2")
    @JsonView(Views.Internal.class)
    private String emergencyContactFirstName2;

    @Column(name = "EmergencyContactLastName2")
    @JsonView(Views.Internal.class)
    private String emergencyContactLastName2;

    @Column(name = "EmergencyContactStreetAddress2")
    @JsonView(Views.Internal.class)
    private String emergencyContactStreetAddress2;

    @Column(name = "EmergencyContactCity2")
    @JsonView(Views.Internal.class)
    private String emergencyContactCity2;

    @Column(name = "EmergencyContactState2")
    @JsonView(Views.Internal.class)
    private String emergencyContactState2;

    @Column(name = "EmergencyContactZip2")
    @JsonView(Views.Internal.class)
    private String emergencyContactZip2;

    @Column(name = "EmergencyContactHomePhone2")
    @JsonView(Views.Internal.class)
    private String emergencyContactHomePhone2;

    @Column(name = "EmergencyContactCellPhone2")
    @JsonView(Views.Internal.class)
    private String emergencyContactCellPhone2;

    @Column(name = "EmergencyContactWorkPhone2")
    @JsonView(Views.Internal.class)
    private String emergencyContactWorkPhone2;

    @Column(name = "EmergencyContactRelationship2")
    @JsonView(Views.Internal.class)
    private String emergencyContactRelationship2;

    @Column(name = "Title")
    @JsonView(Views.Internal.class)
    private String title;
    
    @Column(name = "HeightInches")
    private Short heightInches;
    
    @Column(name = "WeightPounds")
    private Short weightPounds;

   
    @Column(name = "FsEmail")
    private String fsEmail;
    
    @Column(name = "SatPhone")
    private String satPhone;

    @Column(name = "PayPeriodsLeft")
    @JsonView(Views.Internal.class)
    private Short payPeriodsLeft;

    @Column(name = "RegPayPerPayPeriod")
    @JsonView(Views.Internal.class)
    private BigDecimal regPayPerPayPeriod;

    @Column(name = "OvertimeHourlyWage")
    @JsonView(Views.Internal.class)
    private BigDecimal overtimeHourlyWage;

    @Column(name = "PWPSalary")
    @JsonView(Views.Internal.class)
    private BigDecimal pWPSalary;

    @ManyToOne
    @JoinColumn(name = "ActivityCodeFK")
    @JsonView(Views.Public.class)
    private ActivityCode activityCode;

    @Temporal(TemporalType.DATE)
    @JsonView(Views.Internal.class)
    private Date dateOfBirth;

    @Column(name = "addressCity")
    @JsonView(Views.Internal.class)
    private String addressCity;

    @Column(name = "series")
    @JsonView(Views.Internal.class)
    private String series;

    @Column(name = "grade")
    @JsonView(Views.Internal.class)
    private String grade;

    @Column(name = "payment_plan")
    @JsonView(Views.Internal.class)
    private String paymentPlan;

    @Column(name = "addressStreet1")
    @JsonView(Views.Internal.class)
    private String addressStreet1;   

    @Column(name = "addressStreet2")
    @JsonView(Views.Internal.class)
    private String addressStreet2;      

    @Column(name = "addressState")
    @JsonView(Views.Internal.class)
    private String addressState;

    @Column(name = "addressZip")
    @JsonView(Views.Internal.class)
    private String addressZip;
    
    @Column(name = "eyeColor")
    @JsonView(Views.Internal.class)
    private String eyeColor;
    
    @Column(name = "hairColor")
    @JsonView(Views.Internal.class)
    private String hairColor;
    
    @Column(name = "gender")
    @JsonView(Views.Internal.class)
    private String gender;
    
    @Column(name = "race")
    @JsonView(Views.Internal.class)
    private String race;
    
    @Column(name = "otherIdentifyingFeatures")
    @JsonView(Views.Internal.class)
    private String otherIdentifyingFeatures;

    // medical tab info
    @Column(name = "insuranceName")
    @JsonView(Views.Internal.class)
    private String insuranceName;    

    @Column(name = "groupNumber")
    @JsonView(Views.Internal.class)
    private String groupNumber;      

    @Column(name = "idNumber")
    @JsonView(Views.Internal.class)
    private String idNumber;     

    @Column(name = "insurancePhone")
    @JsonView(Views.Internal.class)
    private String insurancePhone; 

    @Column(name = "allergies")
    @JsonView(Views.Internal.class)
    private String allergies;    

    @Column(name = "heightFeet")
    @JsonView(Views.Internal.class)
    private String heightFeet;      

    @Column(name = "doctorsName")
    @JsonView(Views.Internal.class)
    private String doctorsName;         
    
    @Column(name = "doctorsStreetAddress")
    @JsonView(Views.Internal.class)
    private String doctorsStreetAddress;   

    @Column(name = "doctorsCity")
    @JsonView(Views.Internal.class)
    private String doctorsCity;    

    @Column(name = "doctorsState")
    @JsonView(Views.Internal.class)
    private String doctorsState;  

    @Column(name = "doctorsZip")
    @JsonView(Views.Internal.class)
    private String doctorsZip; 

    @Column(name = "doctorsPhone")
    @JsonView(Views.Internal.class)
    private String doctorsPhone;   

    @Column(name = "dentistsName")
    @JsonView(Views.Internal.class)
    private String dentistsName;         
    
    @Column(name = "dentistsStreetAddress")
    @JsonView(Views.Internal.class)
    private String dentistsStreetAddress;   

    @Column(name = "dentistsCity")
    @JsonView(Views.Internal.class)
    private String dentistsCity;    

    @Column(name = "dentistsState")
    @JsonView(Views.Internal.class)
    private String dentistsState;  

    @Column(name = "dentistsZip")
    @JsonView(Views.Internal.class)
    private String dentistsZip; 

    @Column(name = "dentistsPhone")
    @JsonView(Views.Internal.class)
    private String dentistsPhone;   

    // end of medical info          

    // new info needed for edit employee
    @Column(name = "masterNumber")
    @JsonView(Views.Internal.class)
    private String masterNumber;   
    
    @Column(name = "ipNumber")
    @JsonView(Views.Internal.class)
    private String ipNumber;   

    @Column(name = "employeePosition")
    @JsonView(Views.Internal.class)
    private String employeePosition;   

    @Column(name = "fieldStatus")
    @JsonView(Views.Internal.class)
    private String fieldStatus;   

    @Column(name = "crewPosition")
    @JsonView(Views.Internal.class)
    private String crewPosition;   

    @Temporal(TemporalType.DATE)
    @JsonView(Views.Internal.class)
    private Date startNonPayStatus;  

    @Temporal(TemporalType.DATE)
    @JsonView(Views.Internal.class)
    private Date returnToPayStatus;     

    @Temporal(TemporalType.DATE)
    @JsonView(Views.Internal.class)
    private Date terminationDate;   
    // end of new infor for edit employee                                   
         

    @Temporal(TemporalType.DATE)
    @JsonView(Views.Internal.class)
    private Date confidentialityAgreementDate;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "supervisor_id")
    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    private EmployeeProfile supervisor;

    @OneToMany(mappedBy = "supervisor", fetch = FetchType.EAGER,
            cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonSerialize(using = EmployeeProfileListMinimalSerializer.class)
    private List<EmployeeProfile> employees;

    @JsonIgnore
    @OneToOne(mappedBy = "employeeProfile", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY, optional = false)
    private EmployeeProfilePhoto employeeProfilePhoto;

    @OneToOne(mappedBy = "employeeProfile", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY, optional = false)
    @JsonView(Views.Internal.class)
    private DriversLicense driversLicense;
    
    public EmployeeProfile() {
        this.employees = new ArrayList<>();
    }

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
     * @return the addressStreet1
     */
    public String getAddressStreet1() {
        return addressStreet1;
    }

    /**
     * @param addressStreet1 the addressStreet1 to set
     */
    public void setaddressStreet1(String addressStreet1) {
        this.addressStreet1 = addressStreet1;
    }    

    /**
     * @return the addressStreet2
     */
    public String getaddressStreet2() {
        return addressStreet2;
    }

    /**
     * @param addressStreet2 the addressStreet2 to set
     */
    public void setaddressStreet2(String addressStreet2) {
        this.addressStreet2 = addressStreet2;
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
    public List<EmployeeProfile> getEmployees() {
        return employees;
    }

    /**
     * @param employees the employees to set
     */
    public void setEmployees(List<EmployeeProfile> employees) {
        this.employees = employees;
    }

    /**
     * @return the profilePicture
     */
    public Long getProfilePicture() {
        return profilePicture;
    }

    /**
     * @param profilePicture the profilePicture to set
     */
    public void setProfilePicture(Long profilePicture) {
        this.profilePicture = profilePicture;
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
     * @return the eyeColor
     */
    public String getEyeColor() {
        return eyeColor;
    }

    /**
     * @param eyeColor the eyeColor to set
     */
    public void setEyeColor(String eyeColor) {
        this.eyeColor = eyeColor;
    }

    /**
     * @return the hairColor
     */
    public String getHairColor() {
        return hairColor;
    }

    /**
     * @param hairColor the hairColor to set
     */
    public void setHairColor(String hairColor) {
        this.hairColor = hairColor;
    }

    /**
     * @return the gender
     */
    public String getGender() {
        return gender;
    }

    /**
     * @param gender the gender to set
     */
    public void setGender(String gender) {
        this.gender = gender;
    }

    /**
     * @return the race
     */
    public String getRace() {
        return race;
    }

    /**
     * @param race the race to set
     */
    public void setRace(String race) {
        this.race = race;
    }

    /**
     * @return the otherIdentifyingFeatures
     */
    public String getOtherIdentifyingFeatures() {
        return otherIdentifyingFeatures;
    }

    /**
     * @param otherIdentifyingFeatures the otherIdentifyingFeatures to set
     */
    public void setOtherIdentifyingFeatures(String otherIdentifyingFeatures) {
        this.otherIdentifyingFeatures = otherIdentifyingFeatures;
    }

    /**
     * @return the heightInches
     */
    public Short getHeightInches() {
        return heightInches;
    }

    /**
     * @param heightInches the heightInches to set
     */
    public void setHeightInches(Short heightInches) {
        this.heightInches = heightInches;
    }

    /**
     * @return the weightPounds
     */
    public Short getWeightPounds() {
        return weightPounds;
    }

    /**
     * @param weightPounds the weightPounds to set
     */
    public void setWeightPounds(Short weightPounds) {
        this.weightPounds = weightPounds;
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

    /**
     * @return the satPhone
     */
    public String getSatPhone() {
        return satPhone;
    }

    /**
     * @param satPhone the satPhone to set
     */
    public void setSatPhone(String satPhone) {
        this.satPhone = satPhone;
    }

    /**
     * @return the satPhone
     */
    public String getOfficePhone() {
        return officePhone;
    }

    /**
     * @param officePhone the satPhone to set
     */
    public void setOfficePhone(String officePhone) {
        this.officePhone = officePhone;
    } 

    // start of medical info _____________________________________________________________________________________________________
 
    /**
     * @return the satPhone
     */
    public String getinsuranceName() {
        return insuranceName;
    }

    /**
     * @param insuranceName the satPhone to set
     */
    public void setinsuranceName(String insuranceName) {
        this.insuranceName = insuranceName;
    } 

    /**
     * @return the groupNumber
     */
    public String getgroupNumber() {
        return groupNumber;
    }

    /**
     * @param groupNumber the groupNumber to set
     */
    public void setgroupNumber(String groupNumber) {
        this.groupNumber = groupNumber;
    }     

    /**
     * @return the idNumber
     */
    public String getidNumber() {
        return idNumber;
    }

    /**
     * @param idNumber the idNumber to set
     */
    public void setidNumber(String idNumber) {
        this.idNumber = idNumber;
    }     
    
    /**
     * @return the insurancePhone
     */
    public String getinsurancePhone() {
        return insurancePhone;
    }

    /**
     * @param insurancePhone the insurancePhone to set
     */
    public void setinsurancePhone(String insurancePhone) {
        this.insurancePhone = insurancePhone;
    }  

    /**
     * @return the allergies
     */
    public String getallergies() {
        return allergies;
    }

    /**
     * @param allergies the allergies to set
     */
    public void setallergies(String allergies) {
        this.allergies = allergies;
    }         

    /**
     * @return the doctorsName
     */
    public String getdoctorsName() {
        return doctorsName;
    }

    /**
     * @param doctorsName the doctorsName to set
     */
    public void setdoctorsName(String doctorsName) {
        this.doctorsName = doctorsName;
    }  

    /**
     * @return the doctorsStreetAddress
     */
    public String getdoctorsStreetAddress() {
        return doctorsStreetAddress;
    }

    /**
     * @param doctorsStreetAddress the doctorsStreetAddress to set
     */
    public void setdoctorsStreetAddress(String doctorsStreetAddress) {
        this.doctorsStreetAddress = doctorsStreetAddress;
    }     

    /**
     * @return the doctorsCity
     */
    public String getdoctorsCity() {
        return doctorsCity;
    }

    /**
     * @param doctorsCity the doctorsCity to set
     */
    public void setdoctorsCity(String doctorsCity) {
        this.doctorsCity = doctorsCity;
    }       

    /**
     * @return the doctorsState
     */
    public String getdoctorsState() {
        return doctorsState;
    }

    /**
     * @param doctorsState the doctorsState to set
     */
    public void setdoctorsState(String doctorsState) {
        this.doctorsState = doctorsState;
    }      

    /**
     * @return the doctorsZip
     */
    public String getdoctorsZip() {
        return doctorsZip;
    }

    /**
     * @param doctorsZip the doctorsState to set
     */
    public void setdoctorsZip(String doctorsZip) {
        this.doctorsZip = doctorsZip;
    }        

    /**
     * @return the doctorsPhone
     */
    public String getdoctorsPhone() {
        return doctorsPhone;
    }

    /**
     * @param doctorsPhone the doctorsState to set
     */
    public void setdoctorsPhone(String doctorsPhone) {
        this.doctorsPhone = doctorsPhone;
    }      

    /**
     * @return the dentistsName
     */
    public String getdentistsName() {
        return dentistsName;
    }

    /**
     * @param dentistsName the doctorsState to set
     */
    public void setdentistsName(String dentistsName) {
        this.dentistsName = dentistsName;
    }      

    /**
     * @return the dentistsStreetAddress
     */
    public String getdentistsStreetAddress() {
        return dentistsStreetAddress;
    }

    /**
     * @param dentistsStreetAddress the dentistsStreetAddress to set
     */
    public void setdentistsStreetAddress(String dentistsStreetAddress) {
        this.dentistsStreetAddress = dentistsStreetAddress;
    }            

    /**
     * @return the dentistsCity
     */
    public String getdentistsCity() {
        return dentistsCity;
    }

    /**
     * @param dentistsCity the dentistsCity to set
     */
    public void setdentistsCity(String dentistsCity) {
        this.dentistsCity = dentistsCity;
    }  

    /**
     * @return the dentistsState
     */
    public String getdentistsState() {
        return dentistsState;
    }

    /**
     * @param dentistsState the dentistsState to set
     */
    public void setdentistsState(String dentistsState) {
        this.dentistsState = dentistsState;
    }     

    /**
     * @return the dentistsZip
     */
    public String getdentistsZip() {
        return dentistsZip;
    }

    /**
     * @param dentistsZip the dentistsZip to set
     */
    public void setdentistsZip(String dentistsZip) {
        this.dentistsZip = dentistsZip;
    }       

    /**
     * @return the dentistsPhone
     */
    public String getdentistsPhone() {
        return dentistsPhone;
    }

    /**
     * @param dentistsPhone the dentistsPhone to set
     */
    public void setdentistsPhone(String dentistsPhone) {
        this.dentistsPhone = dentistsPhone;
    }           

    // start of new edit employee info _______________________________________________________________________

    /**
     * @return the crewPosition
     */
    public String getcrewPosition() {
        return crewPosition;
    }

    /**
     * @param crewPosition the crewPosition to set
     */
    public void setcrewPosition(String crewPosition) {
        this.crewPosition = crewPosition;
    } 

    /**
     * @return the fieldStatus
     */
    public String getfieldStatus() {
        return fieldStatus;
    }

    /**
     * @param fieldStatus the fieldStatus to set
     */
    public void setfieldStatus(String fieldStatus) {
        this.fieldStatus = fieldStatus;
    } 

    /**
     * @return the heightFeet
     */
    public String getheightFeet() {
        return heightFeet;
    }

    /**
     * @param heightFeet the heightFeet to set
     */
    public void setheightFeet(String heightFeet) {
        this.heightFeet = heightFeet;
    }     

    /**
     * @return the employeePosition
     */
    public String getemployeePosition() {
        return employeePosition;
    }

    /**
     * @param employeePosition the employeePosition to set
     */
    public void setemployeePosition(String employeePosition) {
        this.employeePosition = employeePosition;
    }     

    /**
     * @return the ipNumber
     */
    public String getipNumber() {
        return ipNumber;
    }

    /**
     * @param ipNumber the ipNumber to set
     */
    public void setipNumber(String ipNumber) {
        this.ipNumber = ipNumber;
    }     

    /**
     * @return the masterNumber
     */
    public String getmasterNumber() {
        return masterNumber;
    }

    /**
     * @param masterNumber the masterNumber to set
     */
    public void setmasterNumber(String masterNumber) {
        this.masterNumber = masterNumber;
    }      
      
    /**
     * @return the startNonPayStatus
     */
    public Date getstartNonPayStatus() {
        return startNonPayStatus;
    }

    /**
     * @param startNonPayStatus the startNonPayStatus to
     * set
     */
    public void setstartNonPayStatus(Date startNonPayStatus) {
        this.startNonPayStatus = startNonPayStatus;
    }    

    /**
     * @return the returnToPayStatus
     */
    public Date getreturnToPayStatus() {
        return returnToPayStatus;
    }

    /**
     * @param returnToPayStatus the returnToPayStatus to
     * set
     */
    public void setreturnToPayStatus(Date returnToPayStatus) {
        this.returnToPayStatus = returnToPayStatus;
    }     

    /**
     * @return the terminationDate
     */
    public Date getterminationDate() {
        return terminationDate;
    }

    /**
     * @param terminationDate the terminationDate to
     * set
     */
    public void setterminationDate(Date terminationDate) {
        this.terminationDate = terminationDate;
    }         
}
