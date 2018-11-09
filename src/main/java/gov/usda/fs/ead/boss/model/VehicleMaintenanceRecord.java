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
    
    @Enumerated(EnumType.STRING)
    @Column(name = "VehicleMaintenanceCategory")
    private VehicleMaintenanceCategory vehicleMaintenanceCategory;
    
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
     * @return the vehicleMaintenanceCategory
     */
    public VehicleMaintenanceCategory getVehicleMaintenanceCategory() {
        return vehicleMaintenanceCategory;
    }

    /**
     * @param vehicleMaintenanceCategory the vehicleMaintenanceCategory to set
     */
    public void setVehicleMaintenanceCategory(VehicleMaintenanceCategory vehicleMaintenanceCategory) {
        this.vehicleMaintenanceCategory = vehicleMaintenanceCategory;
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
}
