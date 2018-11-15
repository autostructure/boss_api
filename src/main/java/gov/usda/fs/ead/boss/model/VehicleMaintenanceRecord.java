package gov.usda.fs.ead.boss.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "VehicleMaintenanceRecord")
@JsonInclude(JsonInclude.Include.NON_NULL)
@EntityListeners(AuditingEntityListener.class)
public class VehicleMaintenanceRecord implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Description")
    private String description;

    @Column(name = "Current Mileage")
    private Integer currentMileage;

    @Column(name = "VendorsName")
    private String vendorsName;

    @Column(name = "Cost")
    private BigDecimal cost;

    @Temporal(TemporalType.DATE)
    @Column(name = "ServiceDate")
    private Date serviceDate;

    @Column(name = "Billback")
    private String billback;

    @Column(name = "Warranty", columnDefinition = "tinyint default 0")
    private Boolean warranty;

    @Column(name = "ProjectFund", columnDefinition = "tinyint default 0")
    private Boolean projectFund;

    @Column(name = "ReceiptOnFile", columnDefinition = "tinyint default 0")
    private Boolean receiptOnFile;

    @Column(name = "SafteyInspection", columnDefinition = "tinyint default 0")
    private Boolean safteyInspection;

    @Column(name = "VMEmission", columnDefinition = "tinyint default 0")
    private Boolean vmEmission;

    @Column(name = "OilChange", columnDefinition = "tinyint default 0")
    private Boolean oilChange;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicle")
    private Vehicle vehicle;

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
     * @return the currentMileage
     */
    public Integer getCurrentMileage() {
        return currentMileage;
    }

    /**
     * @param currentMileage the currentMileage to set
     */
    public void setCurrentMileage(Integer currentMileage) {
        this.currentMileage = currentMileage;
    }

    /**
     * @return the vendorsName
     */
    public String getVendorsName() {
        return vendorsName;
    }

    /**
     * @param vendorsName the vendorsName to set
     */
    public void setVendorsName(String vendorsName) {
        this.vendorsName = vendorsName;
    }

    /**
     * @return the cost
     */
    public BigDecimal getCost() {
        return cost;
    }

    /**
     * @param cost the cost to set
     */
    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    /**
     * @return the serviceDate
     */
    public Date getServiceDate() {
        return serviceDate;
    }

    /**
     * @param serviceDate the serviceDate to set
     */
    public void setServiceDate(Date serviceDate) {
        this.serviceDate = serviceDate;
    }

    /**
     * @return the vehicle
     */
    public Vehicle getVehicle() {
        return vehicle;
    }

    /**
     * @param vehicle the vehicle to set
     */
    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    /**
     * @return the billback
     */
    public String getBillback() {
        return billback;
    }

    /**
     * @param billback the billback to set
     */
    public void setBillback(String billback) {
        this.billback = billback;
    }

    /**
     * @return the warranty
     */
    public Boolean getWarranty() {
        return warranty;
    }

    /**
     * @param warranty the warranty to set
     */
    public void setWarranty(Boolean warranty) {
        this.warranty = warranty;
    }

    /**
     * @return the projectFund
     */
    public Boolean getProjectFund() {
        return projectFund;
    }

    /**
     * @param projectFund the projectFund to set
     */
    public void setProjectFund(Boolean projectFund) {
        this.projectFund = projectFund;
    }

    /**
     * @return the receiptOnFile
     */
    public Boolean getReceiptOnFile() {
        return receiptOnFile;
    }

    /**
     * @param receiptOnFile the receiptOnFile to set
     */
    public void setReceiptOnFile(Boolean receiptOnFile) {
        this.receiptOnFile = receiptOnFile;
    }

    /**
     * @return the safteyInspection
     */
    public Boolean getSafteyInspection() {
        return safteyInspection;
    }

    /**
     * @param safteyInspection the safteyInspection to set
     */
    public void setSafteyInspection(Boolean safteyInspection) {
        this.safteyInspection = safteyInspection;
    }

    /**
     * @return the vmEmission
     */
    public Boolean getVmEmission() {
        return vmEmission;
    }

    /**
     * @param vmEmission the vmEmission to set
     */
    public void setVmEmission(Boolean vmEmission) {
        this.vmEmission = vmEmission;
    }

    /**
     * @return the oilChange
     */
    public Boolean getOilChange() {
        return oilChange;
    }

    /**
     * @param oilChange the oilChange to set
     */
    public void setOilChange(Boolean oilChange) {
        this.oilChange = oilChange;
    }
}
