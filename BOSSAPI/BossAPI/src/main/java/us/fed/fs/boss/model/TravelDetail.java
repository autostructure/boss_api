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
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "TravelDetails")
@EntityListeners(AuditingEntityListener.class)
@Getter @Setter @NoArgsConstructor
public class TravelDetail implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    private Date fromDate;
    
    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    private Date toDate;
    
    @Column(name = "Remarks")
    private String remarks;
    
}