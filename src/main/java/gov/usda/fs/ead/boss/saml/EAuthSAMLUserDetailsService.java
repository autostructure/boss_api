package gov.usda.fs.ead.boss.saml;

import gov.usda.fs.ead.boss.model.EmployeeProfile;
import gov.usda.fs.ead.boss.repository.EmployeeProfileRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.saml.SAMLCredential;
import org.springframework.security.saml.userdetails.SAMLUserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class EAuthSAMLUserDetailsService implements SAMLUserDetailsService {

    @Autowired
    EmployeeProfileRepository employeeProfileRepository;

    @Override
    public Object loadUserBySAML(SAMLCredential credential) throws UsernameNotFoundException {
        
        List<String> roles = new ArrayList<>();
        String email = getUserEmail(credential);
        EmployeeProfile p = employeeProfileRepository.findByFsEmail(email);

        if (p != null) {
            
            roles.add("ROLE_APP_USER");
            if (p.getAdmin()) {
                roles.add("ROLE_ADMIN");
            }
            if (p.getCrewLead()) {
                roles.add("ROLE_CREW_LEAD");
            }
            if (p.getTeamLead()) {
                roles.add("ROLE_TEAM_LEAD");
            }

            EAuthSAMLUserDetails userDetails = new EAuthSAMLUserDetails(credential, roles);
            userDetails.setEmployeeProfile(p);

            return userDetails;
            
        } else {

            return new EAuthSAMLUserDetails(credential, roles);

        }
    }

    private String getUserEmail(SAMLCredential credential) {
        return credential.getAttributeAsString("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress");
    }

}
