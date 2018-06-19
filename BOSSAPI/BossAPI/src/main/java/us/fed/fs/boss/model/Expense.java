package us.fed.fs.boss.model;

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
@Getter @Setter @NoArgsConstructor
public class Expense implements Serializable {
    
    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    @CreatedDate
    private Date createdAt;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    @LastModifiedDate
    private Date updatedAt;
    
    @Column(name = "ACTCode")
    private String actCode;
    
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
    @JoinColumn(name = "JobCodeFK")
    private JobCode jobCode;
    
    @ManyToOne
    @JoinColumn(name = "EmployeeProfileFK")
    private EmployeeProfile employeeProfile;
    
    @OneToMany(
        mappedBy = "expense", 
        cascade = CascadeType.ALL, 
        orphanRemoval = true
    )
    private List<ExpenseDetail> expenseDetails;
    
    @OneToMany(
        mappedBy = "expense", 
        cascade = CascadeType.ALL, 
        orphanRemoval = true
    )
    private List<TravelDetail> travelDetails;

}