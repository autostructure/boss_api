package gov.usda.fs.ead.boss.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class EmployeeProfileDTO implements Serializable {
    
    private Long id;
    private String firstName;
    private String lastName;
    private String middleInitial;
    private String preferredName;
    private String nameCode;
    private Long profilePicture;
    private String homePhone;
    private String cellPhone;
    private String fsCellPhone;
    private String officePhone;
    private String personalEmail;
    private String stateAssigned;
    private String dutyStation;
    private String emergencyContactFirstName1;
    private String emergencyContactLastName1;
    private String emergencyContactStreetAddress1;
    private String emergencyContactCity1;
    private String emergencyContactState1;
    private String emergencyContactZip1;
    private String emergencyContactHomePhone1;
    private String emergencyContactCellPhone1;
    private String emergencyContactWorkPhone1;
    private String emergencyContactRelationship1;
    private String emergencyContactFirstName2;
    private String emergencyContactLastName2;
    private String emergencyContactStreetAddress2;
    private String emergencyContactCity2;
    private String emergencyContactState2;
    private String emergencyContactZip2;
    private String emergencyContactHomePhone2;
    private String emergencyContactCellPhone2;
    private String emergencyContactWorkPhone2;
    private String emergencyContactRelationship2;
    private String title;
    private Short heightInches;
    private Short weightPounds;
    private String fsEmail;
    private String satPhone;
    private Short payPeriodsLeft;
    private BigDecimal regPayPerPayPeriod;
    private BigDecimal overtimeHourlyWage;
    private BigDecimal pWPSalary;
    private ActivityCodeDTO activityCode;
    private Date dateOfBirth;
    private String addressCity;
    private String step;
    private String series;
    private String grade;
    private String paymentPlan;
    private String addressStreet1;
    private String addressStreet2;
    private String addressState;
    private String addressZip;
    private String eyeColor;
    private String hairColor;
    private String gender;
    private String race;
    private String otherIdentifyingFeatures;
    private String insuranceName;
    private String groupNumber;
    private String idNumber;
    private String insurancePhone;
    private String allergies;
    private String heightFeet;
    private String doctorsName;
    private String doctorsStreetAddress;
    private String doctorsCity;
    private String doctorsState;
    private String doctorsZip;
    private String doctorsPhone;
    private String dentistsName;
    private String dentistsStreetAddress;
    private String dentistsCity;
    private String dentistsState;
    private String dentistsZip;
    private String dentistsPhone;
    private String masterNumber;
    private String ipNumber;
    private String employeePosition;
    private String fieldStatus;
    private String crewPosition;
    private Date startNonPayStatus;
    private Date returnToPayStatus;
    private Date terminationDate;
    private Date confidentialityAgreementDate;
    private EmployeeProfileDTO supervisor;
    private List<EmployeeProfileDTO> employees;
    @JsonIgnore
    private EmployeeProfilePhotoDTO employeeProfilePhoto;
    private DriversLicenseDTO driversLicense;
    private Boolean admin;
    private Boolean showPersonalCellPhone;
    private Boolean office;
    private Boolean crewLead;
    private Boolean support;
    private Boolean field;
    private Boolean owner;
    
    public EmployeeProfileDTO() {
        this.employees = new ArrayList<>();
    }

    public void setEmployeeProfilePhoto(EmployeeProfilePhotoDTO profilePhoto) {
        this.employeeProfilePhoto = profilePhoto;
    }

    public EmployeeProfilePhotoDTO getEmployeeProfilePhoto() {
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
    public ActivityCodeDTO getActivityCode() {
        return activityCode;
    }

    /**
     * @param activityCode the activityCode to set
     */
    public void setActivityCode(ActivityCodeDTO activityCode) {
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
    public DriversLicenseDTO getDriversLicense() {
        return driversLicense;
    }

    /**
     * @param driversLicense the driversLicense to set
     */
    public void setDriversLicense(DriversLicenseDTO driversLicense) {
        this.driversLicense = driversLicense;
    }

    /**
     * @return the employees
     */
    public List<EmployeeProfileDTO> getEmployees() {
        return employees;
    }

    /**
     * @param employees the employees to set
     */
    public void setEmployees(List<EmployeeProfileDTO> employees) {
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
    public EmployeeProfileDTO getSupervisor() {
        return supervisor;
    }

    /**
     * @param supervisor the supervisor to set
     */
    public void setSupervisor(EmployeeProfileDTO supervisor) {
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

    /**
     * @return the admin
     */
    public Boolean getAdmin() {
        return admin;
    }

    /**
     * @param admin the admin to set
     */
    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    /**
     * @return the office
     */
    public Boolean getOffice() {
        return office;
    }

    /**
     * @param office the office to set
     */
    public void setOffice(Boolean office) {
        this.office = office;
    }

    /**
     * @return the crewLead
     */
    public Boolean getCrewLead() {
        return crewLead;
    }

    /**
     * @param crewLead the crewLead to set
     */
    public void setCrewLead(Boolean crewLead) {
        this.crewLead = crewLead;
    }

    /**
     * @return the support
     */
    public Boolean getSupport() {
        return support;
    }

    /**
     * @param support the support to set
     */
    public void setSupport(Boolean support) {
        this.support = support;
    }

    /**
     * @return the field
     */
    public Boolean getField() {
        return field;
    }

    /**
     * @param field the field to set
     */
    public void setField(Boolean field) {
        this.field = field;
    }

    /**
     * @return the owner
     */
    public Boolean getOwner() {
        return owner;
    }

    /**
     * @param owner the owner to set
     */
    public void setOwner(Boolean owner) {
        this.owner = owner;
    }

    /**
     * @return the fsCellPhone
     */
    public String getFsCellPhone() {
        return fsCellPhone;
    }

    /**
     * @param fsCellPhone the fsCellPhone to set
     */
    public void setFsCellPhone(String fsCellPhone) {
        this.fsCellPhone = fsCellPhone;
    }

    /**
     * @return the showPersonalCellPhone
     */
    public Boolean getShowPersonalCellPhone() {
        return showPersonalCellPhone;
    }

    /**
     * @param showPersonalCellPhone the showPersonalCellPhone to set
     */
    public void setShowPersonalCellPhone(Boolean showPersonalCellPhone) {
        this.showPersonalCellPhone = showPersonalCellPhone;
    }

    /**
     * @return the step
     */
    public String getStep() {
        return step;
    }

    /**
     * @param step the step to set
     */
    public void setStep(String step) {
        this.step = step;
    }
}
