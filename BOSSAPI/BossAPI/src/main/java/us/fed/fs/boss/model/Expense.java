package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.io.Serializable;

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
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Expenses")
@EntityListeners(AuditingEntityListener.class)
@Getter @Setter @NoArgsConstructor
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

}