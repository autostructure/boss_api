package gov.usda.fs.ead.boss;

import gov.usda.fs.ead.boss.model.EmployeeProfile;
import gov.usda.fs.ead.boss.repository.EmployeeProfileRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.opensaml.saml2.core.Attribute;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.saml.SAMLCredential;
import org.springframework.security.saml.userdetails.SAMLUserDetailsService;
import org.springframework.stereotype.Service;

/**
 * Consider implementing your own {@link UserDetailsService} to check user
 * permissions against a persistent storage and load your own
 * {@link UserDetails} implementation.
 */
@Service
public class EAuthSAMLUserDetailsService implements SAMLUserDetailsService {

    @Autowired
    EmployeeProfileRepository employeeProfileRepository;

    @Override
    public Object loadUserBySAML(SAMLCredential credential) throws UsernameNotFoundException {
        List<String> roles = new ArrayList<>();
        String email = getUserEmail(credential);
        EmployeeProfile p = employeeProfileRepository.findByFsEmail(email);
        
        roles.add("User");
        if(p.getAdmin()) {
            roles.add("Admin");
        }
        if(p.getCrewLead()) {
            roles.add("CrewLead");
        }
        if(p.getTeamLead()) {
            roles.add("TeamLead");
        }
        
        EAuthSAMLUserDetails userDetails = new EAuthSAMLUserDetails(credential, roles);
        userDetails.setEmployeeProfile(p);
        return userDetails;
    }

    private String getUserEmail(SAMLCredential credential) {
        return credential.getAttributeAsString("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress");
    }

}
