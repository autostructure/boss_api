package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.io.Serializable;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Expenses")
@EntityListeners(AuditingEntityListener.class)
public class Expense extends Auditable<String> implements Serializable {
    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "SECCode")
    private String secCode;
    
    @ManyToOne
    @JoinColumn(name = "ActivityCodeFK")
    private ActivityCode activityCode;
    
    @Column(name = "UnitCode")
    private String unitCode;
    
    @Column(name = "PayPeriod")
    private int payPeriod;
    
    @Column(name = "Total")
    private long total;
    
    @Column(name = "FinancialYear")
    private Short financialYear;
    
    @Temporal(TemporalType.DATE)
    @Column(name = "DateObl")
    private Date obligatedDate;

    @Column(name = "Description")
    private String description;
    
    @Column(name = "OverrideCode")
    private String overrideCode;
    
    @ManyToOne
    @JoinColumn(name = "PaymentCodeFK")
    private PaymentCode paymentCode;
    
    @ManyToOne
    @JoinColumn(name = "BudgetObjectCodeFK")
    private BudgetObjectCode budgetObjectCode;
    
    @Column(name = "State")
    private String state;
    
    @ManyToOne
    @JoinColumn(name = "CategoryFK")
    private Category category;
    
    @ManyToOne
    @JoinColumn(name = "EmployeeProfileFK")
    private EmployeeProfile employeeProfile;
    
    @OneToMany(
        mappedBy = "expense", 
        cascade = CascadeType.ALL, 
        orphanRemoval = true
    )
    @JsonManagedReference(value="expenseDetails")
    private List<ExpenseDetail> expenseDetails;
    
    @OneToMany(
        mappedBy = "expense", 
        cascade = CascadeType.ALL,
        orphanRemoval = true
    )
    @JsonManagedReference(value="travelDetails")
    private List<TravelDetail> travelDetails;

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
     * @return the activityCode
     */
    public ActivityCode getActivityCode() {
        return activityCode;
    }

    /**
     * @param activityCode the activityCode to set
     */
    public void setActivityCode(ActivityCode activityCode) {
        this.activityCode = activityCode;
    }

    /**
     * @return the unitCode
     */
    public String getUnitCode() {
        return unitCode;
    }

    /**
     * @param unitCode the unitCode to set
     */
    public void setUnitCode(String unitCode) {
        this.unitCode = unitCode;
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
     * @return the overrideCode
     */
    public String getOverrideCode() {
        return overrideCode;
    }

    /**
     * @param overrideCode the overrideCode to set
     */
    public void setOverrideCode(String overrideCode) {
        this.overrideCode = overrideCode;
    }

    /**
     * @return the paymentCode
     */
    public PaymentCode getPaymentCode() {
        return paymentCode;
    }

    /**
     * @param paymentCode the paymentCode to set
     */
    public void setPaymentCode(PaymentCode paymentCode) {
        this.paymentCode = paymentCode;
    }

    /**
     * @return the budgetObjectCode
     */
    public BudgetObjectCode getBudgetObjectCode() {
        return budgetObjectCode;
    }

    /**
     * @param budgetObjectCode the budgetObjectCode to set
     */
    public void setBudgetObjectCode(BudgetObjectCode budgetObjectCode) {
        this.budgetObjectCode = budgetObjectCode;
    }

    /**
     * @return the state
     */
    public String getState() {
        return state;
    }

    /**
     * @param state the state to set
     */
    public void setState(String state) {
        this.state = state;
    }

    /**
     * @return the category
     */
    public Category getCategory() {
        return category;
    }

    /**
     * @param category the category to set
     */
    public void setCategory(Category category) {
        this.category = category;
    }

    /**
     * @return the employeeProfile
     */
    public EmployeeProfile getEmployeeProfile() {
        return employeeProfile;
    }

    /**
     * @param employeeProfile the employeeProfile to set
     */
    public void setEmployeeProfile(EmployeeProfile employeeProfile) {
        this.employeeProfile = employeeProfile;
    }

    /**
     * @return the expenseDetails
     */
    public List<ExpenseDetail> getExpenseDetails() {
        return expenseDetails;
    }

    /**
     * @param expenseDetails the expenseDetails to set
     */
    public void setExpenseDetails(List<ExpenseDetail> expenseDetails) {
        this.expenseDetails = expenseDetails;
        for(ExpenseDetail detail : this.expenseDetails) {
            if(detail.getExpense() != this) {
                detail.setExpense(this);
            }
        }
    }

    /**
     * @return the travelDetails
     */
    public List<TravelDetail> getTravelDetails() {
        return travelDetails;
    }

    /**
     * @param travelDetails the travelDetails to set
     */
    public void setTravelDetails(List<TravelDetail> travelDetails) {
        this.travelDetails = travelDetails;
    }

}