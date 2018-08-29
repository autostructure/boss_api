package us.fed.fs.boss.reports;

import java.math.BigDecimal;
import java.util.List;

public class PayrollForecast {
    
    private BigDecimal grandTotalPayToDate;
    private BigDecimal grandTotalPayForecast;
    private BigDecimal grandTotalFYForecast;
    private List<PayrollForecastRow> rows;

    /**
     * @return the grandTotalPayToDate
     */
    public BigDecimal getGrandTotalPayToDate() {
        return grandTotalPayToDate;
    }

    /**
     * @param grandTotalPayToDate the grandTotalPayToDate to set
     */
    public void setGrandTotalPayToDate(BigDecimal grandTotalPayToDate) {
        this.grandTotalPayToDate = grandTotalPayToDate;
    }

    /**
     * @return the grandTotalPayForecast
     */
    public BigDecimal getGrandTotalPayForecast() {
        return grandTotalPayForecast;
    }

    /**
     * @param grandTotalPayForecast the grandTotalPayForecast to set
     */
    public void setGrandTotalPayForecast(BigDecimal grandTotalPayForecast) {
        this.grandTotalPayForecast = grandTotalPayForecast;
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

    /**
     * @return the rows
     */
    public List<PayrollForecastRow> getRows() {
        return rows;
    }

    /**
     * @param rows the rows to set
     */
    public void setRows(List<PayrollForecastRow> rows) {
        this.rows = rows;
    }
    
}
