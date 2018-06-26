package us.fed.fs.boss.model;

import java.util.Optional;
import org.springframework.data.domain.AuditorAware;

class AuditorAwareImpl implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor() {
      EmployeeProfile pfile = new EmployeeProfile();
      pfile.setFirstName("Ileen");
      pfile.setLastName("Mahmood");
      pfile.setNameCode("ILMahmood");
      pfile.setId(1L);
      /*
        "id": 1,
    "firstName": "Ileen",
    "lastName": "Mahmood",
    "nameCode": "ILMahmood",
      */
      return Optional.of("ILMahmood");
    }

}