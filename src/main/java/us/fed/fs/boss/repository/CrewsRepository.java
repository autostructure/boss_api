package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.Crews;

@Repository
public interface CrewsRepository extends JpaRepository<Crews, Long> {

    @Override
    <S extends Crews> S save(S entity);

    @Override
    List<Crews> findAll();

    @Override
    void delete(Crews budgetObjectCode);

}

