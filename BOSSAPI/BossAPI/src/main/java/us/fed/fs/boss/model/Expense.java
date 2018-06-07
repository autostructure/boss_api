package us.fed.fs.boss.model;

import java.io.Serializable;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
    
    @Column(name = "NameCode")
    private String nameCode;
    
    @Column(name = "PayPeriod")
    private int payPeriod;
    
    @Column(name = "JobCode")
    private int jobCode;
    
    @Column(name = "ExpenseCode")
    private int expenseCode;
    
    @Column(name = "Total")
    private long total;
    
    @Temporal(TemporalType.DATE)
    @Column(name = "DateObl")
    private Date obligatedDate;

    @Column(name = "Description")
    private String description;
    
    @ManyToOne
    @JoinColumn(name = "CategoryFK")
    private Category category;

}