package gov.usda.fs.ead.boss.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

public class ExpenseDTO  implements Serializable {

    private Long id;
    private String secCode;
    private ActivityCodeDTO activityCode;
    private String unitCode;
    private int payPeriod;
    private BigDecimal total;
    private Short financialYear;
    private Date obligatedDate;
    private String description;
    private String overrideCode;
    private PaymentCodeDTO paymentCode;
    private BudgetObjectCodeDTO budgetObjectCode;
    private String state;
    private CategoryDTO category;
    private Date fromDate;
    private Long travelVoucherNumber;
    private Date toDate;
    private String travelRemarks;
    @JsonSerialize(using = EmployeeProfileListMinimalSerializer.class)
    private EmployeeProfileDTO employeeProfile;

    private List<ExpenseDetailDTO> expenseDetails;

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
    public ActivityCodeDTO getActivityCode() {
        return activityCode;
    }

    /**
     * @param activityCode the activityCode to set
     */
    public void setActivityCode(ActivityCodeDTO activityCode) {
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
    public PaymentCodeDTO getPaymentCode() {
        return paymentCode;
    }

    /**
     * @param paymentCode the paymentCode to set
     */
    public void setPaymentCode(PaymentCodeDTO paymentCode) {
        this.paymentCode = paymentCode;
    }

    /**
     * @return the budgetObjectCode
     */
    public BudgetObjectCodeDTO getBudgetObjectCode() {
        return budgetObjectCode;
    }

    /**
     * @param budgetObjectCode the budgetObjectCode to set
     */
    public void setBudgetObjectCode(BudgetObjectCodeDTO budgetObjectCode) {
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
    public CategoryDTO getCategory() {
        return category;
    }

    /**
     * @param category the category to set
     */
    public void setCategory(CategoryDTO category) {
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
    public EmployeeProfileDTO getEmployeeProfile() {
        return employeeProfile;
    }

    /**
     * @param employeeProfile the employeeProfile to set
     */
    public void setEmployeeProfile(EmployeeProfileDTO employeeProfile) {
        this.employeeProfile = employeeProfile;
    }

    /**
     * @return the expenseDetails
     */
    public List<ExpenseDetailDTO> getExpenseDetails() {
        return expenseDetails;
    }

    /**
     * @param expenseDetails the expenseDetails to set
     */
    public void setExpenseDetails(List<ExpenseDetailDTO> expenseDetails) {
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
