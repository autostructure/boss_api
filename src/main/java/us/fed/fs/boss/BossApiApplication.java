package us.fed.fs.boss;

import com.github.ulisesbocchio.spring.boot.security.saml.annotation.EnableSAMLSSO;
import com.github.ulisesbocchio.spring.boot.security.saml.configurer.ServiceProviderConfigurerAdapter;
import com.github.ulisesbocchio.spring.boot.security.saml.configurer.ServiceProviderBuilder;

import org.opensaml.common.xml.SAMLConstants;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.saml.websso.WebSSOProfileOptions;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication(scanBasePackages = {"us.fed.fs.boss", "us.fed.fs.boss.repository"})
@EnableSAMLSSO
public class BossApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(BossApiApplication.class, args);
    }
    
    @Configuration
    public static class MvcConfig extends WebMvcConfigurerAdapter {

        @Override
        public void addViewControllers(ViewControllerRegistry registry) {
            registry.addViewController("/").setViewName("index");
            registry.addViewController("/protected").setViewName("protected");
            registry.addViewController("/unprotected/help").setViewName("help");

        }
    }

    @Configuration
    public static class MyServiceProviderConfig extends ServiceProviderConfigurerAdapter {

        @Override
        public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .antMatchers("/unprotected/**")
            .permitAll()
        .and()
            .anonymous();
        }

        @Override
        public void configure(ServiceProviderBuilder serviceProvider) {
          WebSSOProfileOptions profileOptions = new WebSSOProfileOptions();
          profileOptions.setBinding(SAMLConstants.SAML2_POST_BINDING_URI);
          profileOptions.setBinding(SAMLConstants.SAML2_REDIRECT_BINDING_URI);
            serviceProvider
                .authenticationProvider()
                .userDetailsService(new Auth0SAMLUserDetailsService())
            .and()
                .metadataGenerator()
                .entityId("urn:auth0:localhost-boss:localhostdev")
                .requestSigned(false)
            .and()
                .sso()
                .profileOptions(profileOptions)
                .defaultSuccessURL("/home")
            .and()
                .metadataManager()
                .metadataLocations("classpath:/auth0-metadata.xml")
                .refreshCheckInterval(0);
        }
    }
}
