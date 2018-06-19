package us.fed.fs.boss.model;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "JobCodes")
@EntityListeners(AuditingEntityListener.class)
@Getter @Setter @NoArgsConstructor
public class JobCode implements Serializable  {
    
    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "OverrideCode", nullable = true)
    private Integer overrideCode;
    
    @Column(name = "FinancialYear", nullable = false)
    private Short financialYear;
    
    @Column(name = "JobCode", nullable = false)
    private String jobCode;
    
    @Column(name = "Description", nullable = false)
    private String description;
    
    @Column(name = "Amount", precision=10, scale=2)
    private BigDecimal amount;
    
}
