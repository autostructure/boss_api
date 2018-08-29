package us.fed.fs.boss.reports;

import java.math.BigDecimal;
import java.util.List;

public class PayrollDetails {
    
    private List<PayrollDetailsRow> rows;
    private BigDecimal totalRegPayToDate;
    private BigDecimal totalOvertimeToDate;
    private BigDecimal totalRegPayForecast;
    private BigDecimal grandTotalFYForecast;

    /**
     * @return the rows
     */
    public List<PayrollDetailsRow> getRows() {
        return rows;
    }

    /**
     * @param rows the rows to set
     */
    public void setRows(List<PayrollDetailsRow> rows) {
        this.rows = rows;
    }

    /**
     * @return the totalRegPayToDate
     */
    public BigDecimal getTotalRegPayToDate() {
        return totalRegPayToDate;
    }

    /**
     * @param totalRegPayToDate the totalRegPayToDate to set
     */
    public void setTotalRegPayToDate(BigDecimal totalRegPayToDate) {
        this.totalRegPayToDate = totalRegPayToDate;
    }

    /**
     * @return the totalOvertimeToDate
     */
    public BigDecimal getTotalOvertimeToDate() {
        return totalOvertimeToDate;
    }

    /**
     * @param totalOvertimeToDate the totalOvertimeToDate to set
     */
    public void setTotalOvertimeToDate(BigDecimal totalOvertimeToDate) {
        this.totalOvertimeToDate = totalOvertimeToDate;
    }

    /**
     * @return the totalRegPayForecast
     */
    public BigDecimal getTotalRegPayForecast() {
        return totalRegPayForecast;
    }

    /**
     * @param totalRegPayForecast the totalRegPayForecast to set
     */
    public void setTotalRegPayForecast(BigDecimal totalRegPayForecast) {
        this.totalRegPayForecast = totalRegPayForecast;
    }

    /**
     * @return the grandTotalFYForecast
     */
    public BigDecimal getGrandTotalFYForecast() {
        return grandTotalFYForecast;
    }

    /**
     * @param grandTotalFYForecast the grandTotalFYForecast to set
     */
    public void setGrandTotalFYForecast(BigDecimal grandTotalFYForecast) {
        this.grandTotalFYForecast = grandTotalFYForecast;
    }

 
}
