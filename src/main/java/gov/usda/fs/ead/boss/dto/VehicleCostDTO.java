package gov.usda.fs.ead.boss.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;

public class VehicleCostDTO implements Serializable {

    private Long id;
    private Double mileageRate;
    private Short forRate;
    private Short beginMonth;
    private Short beginYear;
    private Short endMonth;
    private Short endYear;
    
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
    public VehicleDTO getVehicle() {
        return vehicle;
    }

    /**
     * @param vehicle the vehicle to set
     */
    public void setVehicle(VehicleDTO vehicle) {
        this.vehicle = vehicle;
    }

}
