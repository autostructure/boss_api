package us.fed.fs.boss.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "ExpenseCodes")
@EntityListeners(AuditingEntityListener.class)
@Getter @Setter @NoArgsConstructor
public class ExpenseCode implements Serializable {

    @Id
    private Long id;
    
    @Column(name = "Name", nullable = false)
    private String name;
    
}