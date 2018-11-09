package gov.usda.fs.ead.boss;

import gov.usda.fs.ead.boss.saml.EAuthSAMLUserDetailsService;
import com.github.ulisesbocchio.spring.boot.security.saml.annotation.EnableSAMLSSO;
import com.github.ulisesbocchio.spring.boot.security.saml.configurer.ServiceProviderConfigurerAdapter;
import com.github.ulisesbocchio.spring.boot.security.saml.configurer.ServiceProviderBuilder;

import org.opensaml.common.xml.SAMLConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.saml.websso.WebSSOProfileOptions;

@SpringBootApplication(scanBasePackages = {"gov.usda.fs.ead.boss", "gov.usda.fs.ead.boss.repository"})
@EnableSAMLSSO
public class BossApiApplication {
    
    @Autowired EAuthSAMLUserDetailsService auth0SAMLUserDetailsService;

    public static void main(String[] args) {
        SpringApplication.run(BossApiApplication.class, args);
    }
    
    @Configuration
    public class MyServiceProviderConfig extends ServiceProviderConfigurerAdapter {

        @Override
        public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/")
                .access("hasRole('USER')")
                .anyRequest()
                .authenticated();
        }

        @Override
        public void configure(ServiceProviderBuilder serviceProvider) {
          WebSSOProfileOptions profileOptions = new WebSSOProfileOptions();
          profileOptions.setBinding(SAMLConstants.SAML2_POST_BINDING_URI);
          profileOptions.setBinding(SAMLConstants.SAML2_REDIRECT_BINDING_URI);
            serviceProvider
                .authenticationProvider()
                .userDetailsService(auth0SAMLUserDetailsService)
            .and()
                .metadataGenerator()
                .entityId("urn:auth0:localhost-boss:localhostdev")
                .requestSigned(false)
            .and()
                .sso()
                .profileOptions(profileOptions)
                .defaultSuccessURL("/")
            .and()
                .metadataManager()
                .metadataLocations("classpath:/auth0-metadata.xml")
                .refreshCheckInterval(0);
        }
    }
}
