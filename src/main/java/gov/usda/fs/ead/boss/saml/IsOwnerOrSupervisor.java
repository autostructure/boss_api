package gov.usda.fs.ead.boss.saml;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.security.access.prepost.PreAuthorize;

// ROLE_SUPERVISOR, ROLE_CREW_LEAD, ROLE_OFFICE, ROLE_SUPPORT, ROLE_FIELD, ROLE_OWNER

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasRole('ROLE_OWNER') or hasRole('ROLE_SUPERVISOR')")
public @interface IsOwnerOrSupervisor {
}