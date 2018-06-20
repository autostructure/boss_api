package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "ExpenseDetails")
@EntityListeners(AuditingEntityListener.class)
@Getter @Setter @NoArgsConstructor
public class ExpenseDetail implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Amount", nullable = false, precision=10, scale=2)
    private BigDecimal amount;
    
    @Column(name = "Hours")
    private int hours;
    
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
    
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="ExpenseId", nullable=false)
    private Expense expense;
    
}

