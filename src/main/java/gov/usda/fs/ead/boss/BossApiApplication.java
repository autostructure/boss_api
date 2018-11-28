package gov.usda.fs.ead.boss;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


@SpringBootApplication(scanBasePackages = {"gov.usda.fs.ead.boss", "gov.usda.fs.ead.boss.repository"})
public class BossApiApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(BossApiApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(BossApiApplication.class, args);
    }

}
