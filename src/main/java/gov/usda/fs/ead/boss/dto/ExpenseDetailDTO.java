package gov.usda.fs.ead.boss.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import gov.usda.fs.ead.boss.model.ExpenseCode;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class ExpenseDetailDTO implements Serializable {

    private Long id;
    private BigDecimal amount;
    private int hours;
    private String type;
    private ExpenseCode expenseCode;
    private JobCodeDTO jobCode;
    private Date dateVerified;

    private boolean verified;

    @JsonIgnore
    private ExpenseDTO expense;

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

    /**
     * @return the hours
     */
    public int getHours() {
        return hours;
    }

    /**
     * @param hours the hours to set
     */
    public void setHours(int hours) {
        this.hours = hours;
    }

    /**
     * @return the type
     */
    public String getType() {
        return type;
    }

    /**
     * @param type the type to set
     */
    public void setType(String type) {
        this.type = type;
    }

    /**
     * @return the expenseCode
     */
    public ExpenseCode getExpenseCode() {
        return expenseCode;
    }

    /**
     * @param expenseCode the expenseCode to set
     */
    public void setExpenseCode(ExpenseCode expenseCode) {
        this.expenseCode = expenseCode;
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
     * @return the dateVerified
     */
    public Date getDateVerified() {
        return dateVerified;
    }

    /**
     * @param dateVerified the dateVerified to set
     */
    public void setDateVerified(Date dateVerified) {
        this.dateVerified = dateVerified;
    }

    /**
     * @return the verified
     */
    public boolean isVerified() {
        return verified;
    }

    /**
     * @param verified the verified to set
     */
    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    /**
     * @return the expense
     */
    public ExpenseDTO getExpense() {
        return expense;
    }

    /**
     * @param expense the expense to set
     */
    public void setExpense(ExpenseDTO expense) {
        this.expense = expense;
    }

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

}
