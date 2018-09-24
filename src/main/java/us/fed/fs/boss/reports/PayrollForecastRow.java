package us.fed.fs.boss.reports;

import java.math.BigDecimal;

public class PayrollForecastRow {

    private String activityCode;
    private String activityCodeDescription;
    private BigDecimal regPayToDate;
    private BigDecimal regPayForecast;
    private BigDecimal totalFYForecast;

    /**
     * @return the activityCode
     */
    public String getActivityCode() {
        return activityCode;
    }

    /**
     * @param activityCode the activityCode to set
     */
    public void setActivityCode(String activityCode) {
        this.activityCode = activityCode;
    }

    /**
     * @return the activityCodeDescription
     */
    public String getActivityCodeDescription() {
        return activityCodeDescription;
    }

    /**
     * @param activityCodeDescription the activityCodeDescription to set
     */
    public void setActivityCodeDescription(String activityCodeDescription) {
        this.activityCodeDescription = activityCodeDescription;
    }

    /**
     * @return the regPayToDate
     */
    public BigDecimal getRegPayToDate() {
        return regPayToDate;
    }

    /**
     * @param regPayToDate the regPayToDate to set
     */
    public void setRegPayToDate(BigDecimal regPayToDate) {
        this.regPayToDate = regPayToDate;
    }

    /**
     * @return the regPayForecast
     */
    public BigDecimal getRegPayForecast() {
        return regPayForecast;
    }

    /**
     * @param regPayForecast the regPayForecast to set
     */
    public void setRegPayForecast(BigDecimal regPayForecast) {
        this.regPayForecast = regPayForecast;
    }

    /**
     * @return the totalFYForecast
     */
    public BigDecimal getTotalFYForecast() {
        return totalFYForecast;
    }

    /**
     * @param totalFYForecast the totalFYForecast to set
     */
    public void setTotalFYForecast(BigDecimal totalFYForecast) {
        this.totalFYForecast = totalFYForecast;
    }

}
