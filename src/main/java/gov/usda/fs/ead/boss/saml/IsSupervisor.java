/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gov.usda.fs.ead.boss.saml;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.security.access.prepost.PreAuthorize;

// ROLE_SUPERVISOR, ROLE_CREW_LEAD, ROLE_OFFICE, ROLE_SUPPORT, ROLE_FIELD, ROLE_OWNER

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasRole('ROLE_SUPERVISOR')")
public @interface IsSupervisor {
}