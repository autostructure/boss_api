package gov.usda.fs.ead.boss;

import gov.usda.fs.ead.boss.model.EmployeeProfile;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.opensaml.saml2.core.Attribute;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.saml.SAMLCredential;

import java.util.stream.Collectors;

public class Auth0SAMLUserDetails implements UserDetails {

    private final SAMLCredential samlCredential;
    
    private EmployeeProfile employeeProfile;
    
    private final List<String> roles;

    public Auth0SAMLUserDetails(SAMLCredential samlCredential, List<String> roles) {
        this.samlCredential = samlCredential;
        this.roles = roles;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        roles.forEach((role) -> {
            authorities.add(new SimpleGrantedAuthority(role));
        });
        return authorities;
    }

    @Override
    public String getPassword() {
        return "";
    }

    @Override
    public String getUsername() {
        return samlCredential.getNameID().getValue();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getAttribute(String name) {
        String value = samlCredential.getAttributeAsString(name);
        return value != null ? value : "";
    }

    public String[] getAttributeArray(String name) {
        return samlCredential.getAttributeAsStringArray(name);
    }

    public Map<String, String> getSampleAttributes() {
        List<String> names = new ArrayList<>();
        names.add("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier");
        names.add("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn");
        // names.add("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress");
        names.add("http://schemas.auth0.com/email_verified");
        names.add("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name");
        names.add("http://schemas.auth0.com/nickname");
        names.add("http://schemas.auth0.com/picture");
        Map<String, String> mappings = new HashMap<>();
        for (Attribute attribute : samlCredential.getAttributes()) {
            String name = attribute.getName();
            if (names.contains(name)) {
                mappings.put(name, samlCredential.getAttributeAsString(name));
            }
        }
        return mappings;
    }


    public Map<String, String> getAttributes() {
        return samlCredential.getAttributes().stream()
                .collect(Collectors.toMap(Attribute::getName, this::getValue));
    }

    public Map<String, String[]> getAttributesArrays() {
        return samlCredential.getAttributes().stream()
                .collect(Collectors.toMap(Attribute::getName, this::getValueArray));
    }

    private String getValue(Attribute attribute) {
        return getAttribute(attribute.getName());
    }

    private String[] getValueArray(Attribute attribute) {
        return getAttributeArray(attribute.getName());
    }

    /**
     * @return the employeeProfile
     */
    public EmployeeProfile getEmployeeProfile() {
        return employeeProfile;
    }

    /**
     * @param employeeProfile the employeeProfile to set
     */
    public void setEmployeeProfile(EmployeeProfile employeeProfile) {
        this.employeeProfile = employeeProfile;
    }
}
