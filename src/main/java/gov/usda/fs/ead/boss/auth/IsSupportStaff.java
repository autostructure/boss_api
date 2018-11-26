package gov.usda.fs.ead.boss.auth;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.security.access.prepost.PreAuthorize;

// ROLE_SUPERVISOR, ROLE_OWNER, ROLE_SUPPORT, ROLE_OFFICE

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasRole('ROLE_SUPERVISOR') or hasRole('ROLE_CREW_LEAD') or hasRole('ROLE_OFFICE') or hasRole('ROLE_SUPPORT') or hasRole('ROLE_OWNER')")
public @interface IsSupportStaff {
}