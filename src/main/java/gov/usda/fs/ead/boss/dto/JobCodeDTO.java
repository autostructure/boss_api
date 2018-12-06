package gov.usda.fs.ead.boss.dto;

import java.io.Serializable;
import java.math.BigDecimal;

public class JobCodeDTO implements Serializable {

    private Long id;
    private Integer overrideCode;
    private Short financialYear;
    private String jobCode;
    private String description;
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
