package us.fed.fs.boss.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "expense_Sequence")
    @SequenceGenerator(name = "expense_Sequence", sequenceName = "EXP_SEQ")
    private Long id;
    
    @Column(name = "ACTCode")
    private String actCode;
    
    @Column(name = "SECCode")
    private String secCode;
    
    @Column(name = "NameCode")
    private String nameCode;
    
    @Column(name = "PayPeriod")
    private int payPeriod;
    
    @Column(name = "JobCode")
    private int jobCode;
    
    @Column(name = "ExpenseCode")
    private int ExpenseCode;
    
    @Column(name = "Total")
    private long total;
    
    @Temporal(TemporalType.DATE)
    @Column(name = "DateObl")
    private Date obligatedDate;

    @Column(name = "description")
    private String description;

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
     * @return the actCode
     */
    public String getActCode() {
        return actCode;
    }

    /**
     * @param actCode the actCode to set
     */
    public void setActCode(String actCode) {
        this.actCode = actCode;
    }

    /**
     * @return the secCode
     */
    public String getSecCode() {
        return secCode;
    }

    /**
     * @param secCode the secCode to set
     */
    public void setSecCode(String secCode) {
        this.secCode = secCode;
    }

    /**
     * @return the nameCode
     */
    public String getNameCode() {
        return nameCode;
    }

    /**
     * @param nameCode the nameCode to set
     */
    public void setNameCode(String nameCode) {
        this.nameCode = nameCode;
    }

    /**
     * @return the payPeriod
     */
    public int getPayPeriod() {
        return payPeriod;
    }

    /**
     * @param payPeriod the payPeriod to set
     */
    public void setPayPeriod(int payPeriod) {
        this.payPeriod = payPeriod;
    }

    /**
     * @return the jobCode
     */
    public int getJobCode() {
        return jobCode;
    }

    /**
     * @param jobCode the jobCode to set
     */
    public void setJobCode(int jobCode) {
        this.jobCode = jobCode;
    }

    /**
     * @return the ExpenseCode
     */
    public int getExpenseCode() {
        return ExpenseCode;
    }

    /**
     * @param ExpenseCode the ExpenseCode to set
     */
    public void setExpenseCode(int ExpenseCode) {
        this.ExpenseCode = ExpenseCode;
    }

    /**
     * @return the total
     */
    public long getTotal() {
        return total;
    }

    /**
     * @param total the total to set
     */
    public void setTotal(long total) {
        this.total = total;
    }

    /**
     * @return the obligatedDate
     */
    public Date getObligatedDate() {
        return obligatedDate;
    }

    /**
     * @param obligatedDate the obligatedDate to set
     */
    public void setObligatedDate(Date obligatedDate) {
        this.obligatedDate = obligatedDate;
    }

}
