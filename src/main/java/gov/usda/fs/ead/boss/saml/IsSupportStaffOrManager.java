package gov.usda.fs.ead.boss.saml;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.security.access.prepost.PreAuthorize;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasRole('ROLE_SUPERVISOR') or hasRole('ROLE_CREW_LEAD') or hasRole('ROLE_OFFICE') or hasRole('ROLE_SUPPORT') or hasRole('ROLE_OWNER') or hasRole('ROLE_FIELD')")
public @interface IsSupportStaffOrManager {
}