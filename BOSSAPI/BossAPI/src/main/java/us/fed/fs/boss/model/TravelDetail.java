package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "TravelDetails")
@EntityListeners(AuditingEntityListener.class)
@Getter @Setter @NoArgsConstructor
public class TravelDetail implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    private Date fromDate;
    
    @Column(name = "VoucherNumber")
    private Long voucherNumber;
    
    @Column(name = "State")
    private String state;
    
    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    private Date toDate;
    
    @Column(name = "Remarks")
    private String remarks;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="expense")
    @JsonBackReference(value="travelDetails")
    private Expense expense;
    
    @ManyToOne
    @JoinColumn(name = "JobCodeFK")
    private JobCode jobCode;
    
}
