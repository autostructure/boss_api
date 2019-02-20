package gov.usda.fs.ead.boss.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Beacon")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Beacon implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "UnitNumber", nullable = false)
    private String unitNumber;

    @Column(name = "SerialNumber", nullable = true)
    private String serialNumber;

    @Column(name = "BatteryExpDate", nullable = true)
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date batteryExpDate;

    @Column(name = "PurchaseDate", nullable = true)
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date purchaseDate;

    @Column(name = "RegisterDate", nullable = true)
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date registerDate;

    @Column(name = "BeaconPassword", nullable = true)
    private String beaconPassword;
    
    @Column(name = "RecordedCheckoutDate", nullable = true)
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date recordedCheckoutDate;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "CheckoutBy")
    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    EmployeeProfile checkoutBy;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "AssignedEmployee")
    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    EmployeeProfile assignedEmployee;
    
    @ElementCollection
    private List<String> auxData = new ArrayList<String>();


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
     * @return the unitNumber
     */
    public String getUnitNumber() {
        return unitNumber;
    }

    /**
     * @param unitNumber the unitNumber to set
     */
    public void setUnitNumber(String unitNumber) {
        this.unitNumber = unitNumber;
    }

    /**
     * @return the serialNumber
     */
    public String getSerialNumber() {
        return serialNumber;
    }

    /**
     * @param serialNumber the serialNumber to set
     */
    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    /**
     * @return the batteryExpDate
     */
    public Date getBatteryExpDate() {
        return batteryExpDate;
    }

    /**
     * @param batteryExpDate the batteryExpDate to set
     */
    public void setBatteryExpDate(Date batteryExpDate) {
        this.batteryExpDate = batteryExpDate;
    }

    /**
     * @return the purchaseDate
     */
    public Date getPurchaseDate() {
        return purchaseDate;
    }

    /**
     * @param purchaseDate the purchaseDate to set
     */
    public void setPurchaseDate(Date purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    /**
     * @return the registerDate
     */
    public Date getRegisterDate() {
        return registerDate;
    }

    /**
     * @param registerDate the registerDate to set
     */
    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
    }

    /**
     * @return the beaconPassword
     */
    public String getBeaconPassword() {
        return beaconPassword;
    }

    /**
     * @param beaconPassword the beaconPassword to set
     */
    public void setBeaconPassword(String beaconPassword) {
        this.beaconPassword = beaconPassword;
    }

    /**
     * @return the recordedCheckoutDate
     */
    public Date getRecordedCheckoutDate() {
        return recordedCheckoutDate;
    }

    /**
     * @param recordedCheckoutDate the recordedCheckoutDate to set
     */
    public void setRecordedCheckoutDate(Date recordedCheckoutDate) {
        this.recordedCheckoutDate = recordedCheckoutDate;
    }

    /**
     * @return the auxData
     */
    public List<String> getAuxData() {
        return auxData;
    }

    /**
     * @param auxData the auxData to set
     */
    public void setAuxData(List<String> auxData) {
        this.auxData = auxData;
    }

}
