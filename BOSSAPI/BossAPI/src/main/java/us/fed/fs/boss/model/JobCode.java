package us.fed.fs.boss.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "JobCodes")
@EntityListeners(AuditingEntityListener.class)
@Getter @Setter @NoArgsConstructor
public class JobCode implements Serializable  {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column(name = "UnitCode", nullable = false)
    private int unitCode;
    
    @Column(name = "JobCode", nullable = false)
    private String jobCode;
    
    @Column(name = "Description")
    private String description;
    
    @Column(name = "Operating")
    private Double operating;
    
    @Column(name = "Obligated")
    private Double obligated;
    
}
