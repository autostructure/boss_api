package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.PaymentCode;

@Repository
public interface PaymentCodeRepository extends JpaRepository<PaymentCode, Long> {

    @Override
    <S extends PaymentCode> S save(S entity);

    @Override
    List<PaymentCode> findAll();

    @Override
    void delete(PaymentCode paymentCode);
}
