package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Cacheable;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "ExpenseDetails")
@EntityListeners(AuditingEntityListener.class)
@Cacheable
@JsonInclude(JsonInclude.Include.NON_NULL)
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ExpenseDetail implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Amount", nullable = false, precision=10, scale=2)
    private BigDecimal amount;
    
    @Column(name = "Hours")
    private int hours;
    
    @Column(name = "Type")
    private String type;
    
    @ManyToOne
    @JoinColumn(name = "ExpenseCodeFK")
    private ExpenseCode expenseCode;
    
    @ManyToOne
    @JoinColumn(name = "JobCodeFK")
    private JobCode jobCode;
    
    @Column(name = "DateVerified", nullable = true)
    @Temporal(TemporalType.DATE)
    @CreatedDate
    private Date dateVerified;
    
    @Column(name = "Verified", nullable = false)
    private boolean verified;
    
    @JsonBackReference(value="expenseDetails")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="expense")
    private Expense expense;

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
    public Expense getExpense() {
        return expense;
    }

    /**
     * @param expense the expense to set
     */
    public void setExpense(Expense expense) {
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

