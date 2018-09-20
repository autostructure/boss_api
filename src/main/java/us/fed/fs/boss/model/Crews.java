package us.fed.fs.boss.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Table(name = "Crews")
@EntityListeners(AuditingEntityListener.class)
public class Crews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Description")
    private String description;
    
    @Column(name = "Name")
    private String name;
    
    @Column(name = "Name")
    private Boolean isLeader;
    
    @ManyToOne
    @JoinColumn(name = "EmployeeProfileFK")
    @JsonIgnore
    private EmployeeProfile employeeProfile;
    
}
