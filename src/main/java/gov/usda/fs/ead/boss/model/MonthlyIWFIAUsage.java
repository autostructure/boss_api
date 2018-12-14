package gov.usda.fs.ead.boss.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.math.BigDecimal;
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
@Table(name = "MonthlyIWFIAUsage")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class MonthlyIWFIAUsage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Month", nullable = false)
    private Short month;
    
    @Column(name = "Year", nullable = false)
    private Short year;
    
    @Column(name = "Gas", nullable = false)
    private Short gas;
    
    @Column(name = "Oil", nullable = false)
    private Short oil;
    
    @Column(name = "DaysUsed")
    private Short daysUsed;
    
    @Column(name = "Mileage", nullable = false)
    private Integer mileage;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "job_code_id")
    private JobCode jobCode;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "operator_id")
    @JsonSerialize(using = EmployeeProfileMinimalSerializer.class)
    private EmployeeProfile operator;
    
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicle", nullable=false)
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
     * @return the jobCode
     */
    public JobCode getJobCode() {
        return jobCode;
    }

    /**
     * @param jobCode the jobCode to set
     */
    public void setJobCode(JobCode jobCode) {
        this.jobCode = jobCode;
    }

    /**
     * @return the operator
     */
    public EmployeeProfile getOperator() {
        return operator;
    }

    /**
     * @param operator the operator to set
     */
    public void setOperator(EmployeeProfile operator) {
        this.operator = operator;
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
