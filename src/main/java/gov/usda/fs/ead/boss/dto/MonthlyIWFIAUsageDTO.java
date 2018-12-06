package gov.usda.fs.ead.boss.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.io.Serializable;

public class MonthlyIWFIAUsageDTO implements Serializable {
    
    private Long id;
    private Short month;
    private Short year;
    private Short gas;
    private Short oil;
    private Short daysUsed;
    private Integer mileage;
    private JobCodeDTO jobCode;
    
    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    private EmployeeProfileDTO operator;
    
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
     * @return the month
     */
    public Short getMonth() {
        return month;
    }

    /**
     * @param month the month to set
     */
    public void setMonth(Short month) {
        this.month = month;
    }

    /**
     * @return the year
     */
    public Short getYear() {
        return year;
    }

    /**
     * @param year the year to set
     */
    public void setYear(Short year) {
        this.year = year;
    }

    /**
     * @return the gas
     */
    public Short getGas() {
        return gas;
    }

    /**
     * @param gas the gas to set
     */
    public void setGas(Short gas) {
        this.gas = gas;
    }

    /**
     * @return the oil
     */
    public Short getOil() {
        return oil;
    }

    /**
     * @param oil the oil to set
     */
    public void setOil(Short oil) {
        this.oil = oil;
    }

    /**
     * @return the mileage
     */
    public Integer getMileage() {
        return mileage;
    }

    /**
     * @param mileage the mileage to set
     */
    public void setMileage(Integer mileage) {
        this.mileage = mileage;
    }

    /**
     * @return the operator
     */
    public EmployeeProfileDTO getOperator() {
        return operator;
    }

    /**
     * @param operator the operator to set
     */
    public void setOperator(EmployeeProfileDTO operator) {
        this.operator = operator;
    }

    /**
     * @return the jobCode
     */
    public JobCodeDTO getJobCode() {
        return jobCode;
    }

    /**
     * @param jobCode the jobCode to set
     */
    public void setJobCode(JobCodeDTO jobCode) {
        this.jobCode = jobCode;
    }

    /**
     * @return the daysUsed
     */
    public Short getDaysUsed() {
        return daysUsed;
    }

    /**
     * @param daysUsed the daysUsed to set
     */
    public void setDaysUsed(Short daysUsed) {
        this.daysUsed = daysUsed;
    }

    // /**
    //  * @return the cost
    //  */
    // public BigDecimal getCost() {
    //     return cost;
    // }

    // /**
    //  * @param cost the cost to set
    //  */
    // public void setCost(BigDecimal cost) {
    //     this.cost = cost;
    // }

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
