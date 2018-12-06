package gov.usda.fs.ead.boss.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class VehicleMaintenanceRecordDTO implements Serializable {

    private Long id;
    private String description;
    private Integer currentMileage;
    private String vendorsName;
    private BigDecimal cost;
    private Date serviceDate;
    private String billback;
    private Boolean warranty;
    private Boolean projectFund;
    private Boolean receiptOnFile;
    private Boolean safteyInspection;
    private Boolean vmEmission;
    private Boolean oilChange;

    @JsonIgnore
    private VehicleDTO vehicle;

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
    public VehicleDTO getVehicle() {
        return vehicle;
    }

    /**
     * @param vehicle the vehicle to set
     */
    public void setVehicle(VehicleDTO vehicle) {
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
