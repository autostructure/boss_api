package gov.usda.fs.ead.boss;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

import org.modelmapper.ModelMapper;

@SpringBootApplication(scanBasePackages = {"gov.usda.fs.ead.boss", "gov.usda.fs.ead.boss.repository"})
public class BossApiApplication extends SpringBootServletInitializer {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(BossApiApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(BossApiApplication.class, args);
    }

}
