package us.fed.fs.boss.reports;

public class BudgetSummaryRow {
    private String jobCode;
    private String fiscalYear;
    private String description;
    private String operating;
    private String obligated;
    private String balance;

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
     * @return the fiscalYear
     */
    public String getFiscalYear() {
        return fiscalYear;
    }

    /**
     * @param fiscalYear the fiscalYear to set
     */
    public void setFiscalYear(String fiscalYear) {
        this.fiscalYear = fiscalYear;
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
     * @return the operating
     */
    public String getOperating() {
        return operating;
    }

    /**
     * @param operating the operating to set
     */
    public void setOperating(String operating) {
        this.operating = operating;
    }

    /**
     * @return the obligated
     */
    public String getObligated() {
        return obligated;
    }

    /**
     * @param obligated the obligated to set
     */
    public void setObligated(String obligated) {
        this.obligated = obligated;
    }

    /**
     * @return the balance
     */
    public String getBalance() {
        return balance;
    }

    /**
     * @param balance the balance to set
     */
    public void setBalance(String balance) {
        this.balance = balance;
    }
}
