package us.fed.fs.boss.reports;

import java.util.List;

public class BudgetSummary {

    private List<BudgetSummaryRow> rows;
    private String totalOperating;
    private String totalObligated;
    private String totalBalance;

    /**
     * @return the rows
     */
    public List<BudgetSummaryRow> getRows() {
        return rows;
    }

    /**
     * @param rows the rows to set
     */
    public void setRows(List<BudgetSummaryRow> rows) {
        this.rows = rows;
    }

    /**
     * @return the totalOperating
     */
    public String getTotalOperating() {
        return totalOperating;
    }

    /**
     * @param totalOperating the totalOperating to set
     */
    public void setTotalOperating(String totalOperating) {
        this.totalOperating = totalOperating;
    }

    /**
     * @return the totalObligated
     */
    public String getTotalObligated() {
        return totalObligated;
    }

    /**
     * @param totalObligated the totalObligated to set
     */
    public void setTotalObligated(String totalObligated) {
        this.totalObligated = totalObligated;
    }

    /**
     * @return the totalBalance
     */
    public String getTotalBalance() {
        return totalBalance;
    }

    /**
     * @param totalBalance the totalBalance to set
     */
    public void setTotalBalance(String totalBalance) {
        this.totalBalance = totalBalance;
    }

}
