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
@Table(name = "Training")
@EntityListeners(AuditingEntityListener.class)
@Getter @Setter @NoArgsConstructor
public class Training implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "YearsValid")
    private Short yearsValid;
    
    @Column(name = "Hours")
    private Short hours;
    
    @Column(name = "Location")
    private String location;
    
     @Column(name = "Presenter")
    private String presenter;
     
    @Column(name = "Title")
    private String title;
    
    @Temporal(TemporalType.DATE)
    @Column(name = "DateOfTraining")
    private Date dateOfTraining;
    
    @JsonBackReference(value="training")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="training")
    private Training training;

}
