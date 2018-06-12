package us.fed.fs.boss.repository;

import java.util.List;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fed.fs.boss.model.PaymentCode;

@Repository
public interface PaymentCodeRepository extends JpaRepository<PaymentCode, Long> {

    @Override
    @CachePut("paymentCodes")
    <S extends PaymentCode> S save(S entity);

    @Override
    @Cacheable("paymentCodes")
    List<PaymentCode> findAll();

    @Override
    @CacheEvict("paymentCodes")
    void delete(PaymentCode paymentCode);
}
