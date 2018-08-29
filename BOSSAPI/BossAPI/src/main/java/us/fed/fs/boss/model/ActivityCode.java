package us.fed.fs.boss.model;

import java.io.Serializable;
import javax.persistence.Cacheable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CacheConcurrencyStrategy;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "ActivityCodes")
@EntityListeners(AuditingEntityListener.class)
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ActivityCode implements Serializable {

    @Id
    private String code;
    
    @Column(name = "Name", nullable = false)
    private String name;

    /**
     * @return the code
     */
    public String getCode() {
        return code;
    }

    /**
     * @param code the code to set
     */
    public void setCode(String code) {
        this.code = code;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }
    
}

