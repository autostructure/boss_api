package gov.usda.fs.ead.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import gov.usda.fs.ead.boss.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

    @Override
    <S extends Contact> S save(S entity);

    @Override
    List<Contact> findAll();

    @Override
    void delete(Contact budgetObjectCode);

}
