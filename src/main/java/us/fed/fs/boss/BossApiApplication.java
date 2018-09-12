package us.fed.fs.boss;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"us.fed.fs.boss", "us.fed.fs.boss.repository"})
public class BossApiApplication {
	public static void main(String[] args) {
		SpringApplication.run(BossApiApplication.class, args);
	}
}
