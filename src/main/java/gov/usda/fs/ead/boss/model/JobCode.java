package gov.usda.fs.ead.boss.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.Cacheable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CacheConcurrencyStrategy;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "JobCodes")
@EntityListeners(AuditingEntityListener.class)
@Cacheable 
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class JobCode implements Serializable {

    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "OverrideCode", nullable = true)
    private Integer overrideCode;

    @Column(name = "FinancialYear", nullable = true)
    private Short financialYear;

    @Column(name = "JobCode", nullable = false)
    private String jobCode;

    @Column(name = "Description", nullable = true)
    private String description;

    @Column(name = "Amount", precision = 10, scale = 2)
    private BigDecimal amount;

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
     * @return the overrideCode
     */
    public Integer getOverrideCode() {
        return overrideCode;
    }

    /**
     * @param overrideCode the overrideCode to set
     */
    public void setOverrideCode(Integer overrideCode) {
        this.overrideCode = overrideCode;
    }

    /**
     * @return the financialYear
     */
    public Short getFinancialYear() {
        return financialYear;
    }

    /**
     * @param financialYear the financialYear to set
     */
    public void setFinancialYear(Short financialYear) {
        this.financialYear = financialYear;
    }

    /**
     * @return the jobCode
     */
    public String getJobCode() {
        return jobCode;
    }

    /**
     * @param jobCode the jobCode to set
     */
    public void setJobCode(String jobCode) {
        this.jobCode = jobCode;
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
     * @return the amount
     */
    public BigDecimal getAmount() {
        return amount;
    }

    /**
     * @param amount the amount to set
     */
    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }


}
