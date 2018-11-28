package gov.usda.fs.ead.boss;

import gov.usda.fs.ead.boss.auth.AuthServlet;
import gov.usda.fs.ead.boss.controller.EAuthServlet;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import org.springframework.context.annotation.Bean;

@SpringBootApplication(scanBasePackages = {"gov.usda.fs.ead.boss", "gov.usda.fs.ead.boss.repository"})
public class BossApiApplication extends SpringBootServletInitializer {

    @Bean
    public ServletRegistrationBean exampleServletBean() {
        ServletRegistrationBean bean = new ServletRegistrationBean(
                new AuthServlet(), "/auth/login/*");
        bean.setLoadOnStartup(1);
        return bean;
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(BossApiApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(BossApiApplication.class, args);
    }

}
