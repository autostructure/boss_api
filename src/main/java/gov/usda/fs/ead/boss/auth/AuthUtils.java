package gov.usda.fs.ead.boss.auth;

import gov.usda.fs.ead.boss.model.EmployeeProfile;
import java.util.ArrayList;
import java.util.List;

public class AuthUtils {
    public static List<String> getRoles(IAuthenticationFacade authenticationFacade) {
        List<String> roles = new ArrayList<>();
        authenticationFacade.getAuthentication().getAuthorities().forEach((authority) -> {
            roles.add(authority.getAuthority());
        });
        return roles;
    }
    
    public static boolean isInRole(String role, IAuthenticationFacade authenticationFacade) {
        return AuthUtils.getRoles(authenticationFacade).contains(role);
    }
    
    public static EmployeeProfile getProfile(IAuthenticationFacade authenticationFacade) {
        EAuthSAMLUserDetails ds = (EAuthSAMLUserDetails) authenticationFacade.getAuthentication().getDetails();
        return ds.getEmployeeProfile();
    }
}
