package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.io.Serializable;
import java.math.BigDecimal;

import java.util.Date;
import java.util.List;
import javax.persistence.Cacheable;
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
import org.hibernate.annotations.CacheConcurrencyStrategy;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Expenses")
@EntityListeners(AuditingEntityListener.class)
@Cacheable
@JsonInclude(Include.NON_NULL)
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Expense extends Auditable<String> implements Serializable {
    
    // SQL Server and MySQL
    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    // ORACLE IDENTITY
    /*
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "expense_Sequence")
    @SequenceGenerator(name = "expense_Sequence", sequenceName = "EXPENSE_SEQ")   
    private Long id;
    */
    
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
    private BigDecimal total;
    
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
    
    @Column(name = "FromDate")
    @Temporal(TemporalType.DATE)
    private Date fromDate;
    
    @Column(name = "TravelVoucherNumber")
    private Long travelVoucherNumber;
    
    @Column(name = "ToDate")
    @Temporal(TemporalType.DATE)
    private Date toDate;
    
    @Column(name = "TravelRemarks")
    private String travelRemarks;
    
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
    public BigDecimal getTotal() {
        return total;
    }

    /**
     * @param total the total to set
     */
    public void setTotal(BigDecimal total) {
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
     * @return the fromDate
     */
    public Date getFromDate() {
        return fromDate;
    }

    /**
     * @param fromDate the fromDate to set
     */
    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }

    /**
     * @return the travelVoucherNumber
     */
    public Long getTravelVoucherNumber() {
        return travelVoucherNumber;
    }

    /**
     * @param travelVoucherNumber the travelVoucherNumber to set
     */
    public void setTravelVoucherNumber(Long travelVoucherNumber) {
        this.travelVoucherNumber = travelVoucherNumber;
    }

    /**
     * @return the toDate
     */
    public Date getToDate() {
        return toDate;
    }

    /**
     * @param toDate the toDate to set
     */
    public void setToDate(Date toDate) {
        this.toDate = toDate;
    }

    /**
     * @return the travelRemarks
     */
    public String getTravelRemarks() {
        return travelRemarks;
    }

    /**
     * @param travelRemarks the travelRemarks to set
     */
    public void setTravelRemarks(String travelRemarks) {
        this.travelRemarks = travelRemarks;
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