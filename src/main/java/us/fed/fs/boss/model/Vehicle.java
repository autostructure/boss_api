package us.fed.fs.boss.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
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
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Vehicle")
@EntityListeners(AuditingEntityListener.class)
public class Vehicle implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "VIN")
    private String vin;

    @Column(name = "Camera")
    private String camera;    

    @Column(name = "License")
    private String license;

    @Column(name = "EquipmentNumber")
    private String equipmentNumber;

    @Column(name = "ModelNumber")
    private String modelNumber;

    @Column(name = "Make")
    private String make;

    @Column(name = "ModelYear")
    private Short modelYear;

    @Column(name = "Description")
    private String description;

    @Column(name = "Color")
    private String color;

    @Column(name = "EngineNumber")
    private String engineNumber;

    @Column(name = "Accessory")
    private String accessory;

    @Column(name = "OldLicense")
    private String oldLicense;

    @Column(name = "OwnershipType")
    private String ownershipType;

    @Column(name = "VehicleClassCode")
    private String vehicleClassCode;

    @Column(name = "State")
    private String state;

    @Column(name = "CityOrLocation")
    private String cityOrLocation;

    @Column(name = "KeysToolBox")
    private String keysToolBox;

    @Column(name = "Accessory2")
    private String accessory2;

    @Column(name = "Tonneau")
    private String tonneau;

    @Temporal(TemporalType.DATE)
    @Column(name = "DateAquired")
    private Date dateAquired;

    @Temporal(TemporalType.DATE)
    @Column(name = "ReplacementDate")
    private Date replacementDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "DisposalDate")
    private Date disposalDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "ReleasedDate")
    private Date releasedDate;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "assigned_operator_id")
    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    private EmployeeProfile assignedOperator;

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
    public EmployeeProfile getAssignedOperator() {
        return assignedOperator;
    }

    /**
     * @param assignedOperator the assignedOperator to set
     */
    public void setAssignedOperator(EmployeeProfile assignedOperator) {
        this.assignedOperator = assignedOperator;
    }

}
