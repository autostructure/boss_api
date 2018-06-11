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
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    
    @Column(name = "ActivityCode")
    private String activityCode;
    
    @Column(name = "PayPeriod")
    private int payPeriod;
    
    @Column(name = "Total")
    private long total;
    
    @Column(name = "FinancialYear")
    private long financialYear;
    
    @Temporal(TemporalType.DATE)
    @Column(name = "DateObl")
    private Date obligatedDate;

    @Column(name = "Description")
    private String description;
    
    @Column(name = "OverrideCode")
    private String overrideCode;
    
    @Column(name = "PaymentCode")
    private String paymentCode;
    
    @Column(name = "State")
    private String state;
    
    @ManyToOne
    @JoinColumn(name = "CategoryFK")
    private Category category;
    
    @ManyToOne
    @JoinColumn(name = "JobCodeF")
    private JobCode jobCode;
    
    @ManyToOne
    @JoinColumn(name = "EmployeeProfileFK")
    private EmployeeProfile employeeProfile;
    
    @OneToMany(
        cascade = CascadeType.ALL
    )
    private List<ExpenseDetail> expenseDetails;
    
    @OneToMany(
        cascade = CascadeType.ALL
    )
    private List<TravelDetail> travelDetails;

}