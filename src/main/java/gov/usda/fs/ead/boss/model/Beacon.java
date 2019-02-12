package gov.usda.fs.ead.boss.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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

}
