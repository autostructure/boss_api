package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "VehicleCost")
@EntityListeners(AuditingEntityListener.class)
public class VehicleCost implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "MileageRate")
    private Double mileageRate;

    @Column(name = "ForRate")
    private Short forRate;

    @Column(name = "BeginMonth")
    private Short beginMonth;

    @Column(name = "BeginYear")
    private Short beginYear;

    @Column(name = "EndMonth")
    private Short endMonth;

    @Column(name = "EndYear")
    private Short endYear;
    
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
     * @return the mileageRate
     */
    public Double getMileageRate() {
        return mileageRate;
    }

    /**
     * @param mileageRate the mileageRate to set
     */
    public void setMileageRate(Double mileageRate) {
        this.mileageRate = mileageRate;
    }

    /**
     * @return the forRate
     */
    public Short getForRate() {
        return forRate;
    }

    /**
     * @param forRate the forRate to set
     */
    public void setForRate(Short forRate) {
        this.forRate = forRate;
    }

    /**
     * @return the beginYear
     */
    public Short getBeginYear() {
        return beginYear;
    }

    /**
     * @param beginYear the beginYear to set
     */
    public void setBeginYear(Short beginYear) {
        this.beginYear = beginYear;
    }

    /**
     * @return the beginMonth
     */
    public Short getBeginMonth() {
        return beginMonth;
    }

    /**
     * @param beginMonth the beginMonth to set
     */
    public void setBeginMonth(Short beginMonth) {
        this.beginMonth = beginMonth;
    }

    /**
     * @return the endMonth
     */
    public Short getEndMonth() {
        return endMonth;
    }

    /**
     * @param endMonth the endMonth to set
     */
    public void setEndMonth(Short endMonth) {
        this.endMonth = endMonth;
    }

    /**
     * @return the endYear
     */
    public Short getEndYear() {
        return endYear;
    }

    /**
     * @param endYear the endYear to set
     */
    public void setEndYear(Short endYear) {
        this.endYear = endYear;
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
