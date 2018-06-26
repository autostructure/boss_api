package us.fed.fs.boss.model;

import java.util.Optional;
import org.springframework.data.domain.AuditorAware;

class AuditorAwareImpl implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor() {
      return Optional.of("ILMahmood");
    }

}