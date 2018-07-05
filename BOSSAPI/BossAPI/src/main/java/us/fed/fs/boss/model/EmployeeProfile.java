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
@Table(name = "EmployeeProfiles")
@EntityListeners(AuditingEntityListener.class)
@Getter @Setter @NoArgsConstructor
public class EmployeeProfile implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "FirstName")
    private String firstName;
    
    @Column(name = "LastName")
    private String lastName;
    
    @Column(name = "NameCode", unique=true)
    private String nameCode;
    
    @Column(name = "Title")
    private String title;
    
    @Column(name = "PayPeriodsLeft")
    private Short payPeriodsLeft;
    
    @Column(name = "RegPayPerPayPeriod")
    private BigDecimal regPayPerPayPeriod;
    
}
