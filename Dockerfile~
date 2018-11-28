FROM maven:slim

COPY pom.xml .
COPY target/boss_api-0.0.1-SNAPSHOT.jar target/

RUN mvn spring-boot:repackage

CMD ["mvn", "spring-boot:run"]
