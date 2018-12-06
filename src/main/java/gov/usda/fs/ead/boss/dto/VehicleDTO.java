package gov.usda.fs.ead.boss.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class VehicleDTO implements Serializable {

    private Long id;
    private String vin;
    private String camera;
    private String license;
    private String equipmentNumber;
    private String modelNumber;
    private String make;
    private Short modelYear;
    private String description;
    private String color;
    private String engineNumber;
    private String accessory;
    private String oldLicense;
    private String ownershipType;
    private String vehicleClassCode;
    private String state;
    private String cityOrLocation;
    private String keysToolBox;
    private String accessory2;
    private String tonneau;
    private Date dateAquired;
    private Date replacementDate;
    private Date disposalDate;
    private Date releasedDate;
    private Short monthsNotUsed;
    private EmployeeProfileDTO assignedOperator;
    private List<VehicleMaintenanceRecordDTO> maintenanceRecords;
    private List<MonthlyIWFIAUsageDTO> monthlyIWFIAUsage;
    private List<VehicleCostDTO> vehicleCost;

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
     * @return the vin
     */
    public String getVin() {
        return vin;
    }

    /**
     * @param vin the vin to set
     */
    public void setVin(String vin) {
        this.vin = vin;
    }

    /**
     * @return the license
     */
    public String getLicense() {
        return license;
    }

    /**
     * @param license the license to set
     */
    public void setLicense(String license) {
        this.license = license;
    }

    /**
     * @return the equipmentNumber
     */
    public String getEquipmentNumber() {
        return equipmentNumber;
    }

    /**
     * @param equipmentNumber the equipmentNumber to set
     */
    public void setEquipmentNumber(String equipmentNumber) {
        this.equipmentNumber = equipmentNumber;
    }

    /**
     * @return the modelNumber
     */
    public String getModelNumber() {
        return modelNumber;
    }

    /**
     * @param modelNumber the modelNumber to set
     */
    public void setModelNumber(String modelNumber) {
        this.modelNumber = modelNumber;
    }

    /**
     * @return the make
     */
    public String getMake() {
        return make;
    }

    /**
     * @param make the make to set
     */
    public void setMake(String make) {
        this.make = make;
    }

    /**
     * @return the modelYear
     */
    public Short getModelYear() {
        return modelYear;
    }

    /**
     * @param modelYear the modelYear to set
     */
    public void setModelYear(Short modelYear) {
        this.modelYear = modelYear;
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
     * @return the color
     */
    public String getColor() {
        return color;
    }

    /**
     * @param color the color to set
     */
    public void setColor(String color) {
        this.color = color;
    }

    /**
     * @return the engineNumber
     */
    public String getEngineNumber() {
        return engineNumber;
    }

    /**
     * @param engineNumber the engineNumber to set
     */
    public void setEngineNumber(String engineNumber) {
        this.engineNumber = engineNumber;
    }

    /**
     * @return the accessory
     */
    public String getAccessory() {
        return accessory;
    }

    /**
     * @param accessory the accessory to set
     */
    public void setAccessory(String accessory) {
        this.accessory = accessory;
    }

    /**
     * @return the oldLicense
     */
    public String getOldLicense() {
        return oldLicense;
    }

    /**
     * @param oldLicense the oldLicense to set
     */
    public void setOldLicense(String oldLicense) {
        this.oldLicense = oldLicense;
    }

    /**
     * @return the ownershipType
     */
    public String getOwnershipType() {
        return ownershipType;
    }

    /**
     * @param ownershipType the ownershipType to set
     */
    public void setOwnershipType(String ownershipType) {
        this.ownershipType = ownershipType;
    }

 /**
     * @return the camera
     */
    public String getCamera() {
        return camera;
    }

    /**
     * @param camera the camera to set
     */
    public void setCamera(String camera) {
        this.camera = camera;
    }


    /**
     * @return the vehicleClassCose
     */
    public String getVehicleClassCode() {
        return vehicleClassCode;
    }

    /**
     * @param vehicleClassCode the vehicleClassCode to set
     */
    public void setVehicleClassCode(String vehicleClassCode) {
        this.vehicleClassCode = vehicleClassCode;
    }

    /**
     * @return the cityOrLocation
     */
    public String getCityOrLocation() {
        return cityOrLocation;
    }

    /**
     * @param cityOrLocation the cityOrLocation to set
     */
    public void setCityOrLocation(String cityOrLocation) {
        this.cityOrLocation = cityOrLocation;
    }

    /**
     * @return the keysToolBox
     */
    public String getKeysToolBox() {
        return keysToolBox;
    }

    /**
     * @param keysToolBox the keysToolBox to set
     */
    public void setKeysToolBox(String keysToolBox) {
        this.keysToolBox = keysToolBox;
    }


    /**
     * @return the accessory2
     */
    public String getAccessory2() {
        return accessory2;
    }

    /**
     * @param accessory2 the accessory2 to set
     */
    public void setAccessory2(String accessory2) {
        this.accessory2 = accessory2;
    }

    /**
     * @return the tonneau
     */
    public String getTonneau() {
        return tonneau;
    }

    /**
     * @param tonneau the tonneau to set
     */
    public void setTonneau(String tonneau) {
        this.tonneau = tonneau;
    }

    /**
     * @return the state
     */
    public String getState() {
        return state;
    }

    /**
     * @param state the state to set
     */
    public void setState(String state) {
        this.state = state;
    }

    /**
     * @return the dateAquired
     */
    public Date getDateAquired() {
        return dateAquired;
    }

    /**
     * @param dateAquired the dateAquired to set
     */
    public void setDateAquired(Date dateAquired) {
        this.dateAquired = dateAquired;
    }

    /**
     * @return the replacementDate
     */
    public Date getReplacementDate() {
        return replacementDate;
    }

    /**
     * @param replacementDate the replacementDate to set
     */
    public void setReplacementDate(Date replacementDate) {
        this.replacementDate = replacementDate;
    }

    /**
     * @return the disposalDate
     */
    public Date getDisposalDate() {
        return disposalDate;
    }

    /**
     * @param disposalDate the disposalDate to set
     */
    public void setDisposalDate(Date disposalDate) {
        this.disposalDate = disposalDate;
    }

    /**
     * @return the releasedDate
     */
    public Date getReleasedDate() {
        return releasedDate;
    }

    /**
     * @param releasedDate the releasedDate to set
     */
    public void setReleasedDate(Date releasedDate) {
        this.releasedDate = releasedDate;
    }

    /**
     * @return the assignedOperator
     */
    public EmployeeProfileDTO getAssignedOperator() {
        return assignedOperator;
    }

    /**
     * @param assignedOperator the assignedOperator to set
     */
    public void setAssignedOperator(EmployeeProfileDTO assignedOperator) {
        this.assignedOperator = assignedOperator;
    }

    /**
     * @return the maintenanceRecords
     */
    public List<VehicleMaintenanceRecordDTO> getMaintenanceRecords() {
        return maintenanceRecords;
    }

    /**
     * @param maintenanceRecords the maintenanceRecords to set
     */
    public void setMaintenanceRecords(List<VehicleMaintenanceRecordDTO> maintenanceRecords) {
        this.maintenanceRecords = maintenanceRecords;
    }

    /**
     * @return the monthsNotUsed
     */
    public Short getMonthsNotUsed() {
        return monthsNotUsed;
    }

    /**
     * @param monthsNotUsed the monthsNotUsed to set
     */
    public void setMonthsNotUsed(Short monthsNotUsed) {
        this.monthsNotUsed = monthsNotUsed;
    }

    /**
     * @return the monthlyIWFIAUsage
     */
    public List<MonthlyIWFIAUsageDTO> getMonthlyIWFIAUsage() {
        return monthlyIWFIAUsage;
    }

    /**
     * @param monthlyIWFIAUsage the monthlyIWFIAUsage to set
     */
    public void setMonthlyIWFIAUsage(List<MonthlyIWFIAUsageDTO> monthlyIWFIAUsage) {
        this.monthlyIWFIAUsage = monthlyIWFIAUsage;
    }

    /**
     * @return the vehicleCost
     */
    public List<VehicleCostDTO> getVehicleCost() {
        return vehicleCost;
    }

    /**
     * @param vehicleCost the vehicleCost to set
     */
    public void setVehicleCost(List<VehicleCostDTO> vehicleCost) {
        this.vehicleCost = vehicleCost;
    }

}
