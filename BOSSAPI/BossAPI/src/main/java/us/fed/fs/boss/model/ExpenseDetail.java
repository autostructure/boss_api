package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column(name = "Amount", nullable = false)
    private Double amount;
    
    @Column(name = "Hours")
    private int hours;
    
    @ManyToOne
    @JoinColumn(name = "ExpenseCodeFK")
    private ExpenseCode expenseCode;
    
    @ManyToOne
    @JoinColumn(name = "JobCodeFK")
    private JobCode jobCode;
    
    @Column(name = "DateVerified", nullable = false)
    @Temporal(TemporalType.DATE)
    @CreatedDate
    private Date dateVerified;
    
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="ExpenseId", nullable=false)
    private Expense expense;
    
}

