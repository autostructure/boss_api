# FIA BOSS API

Restful services for use with FIA-BOSS

### Prerequisites

java 8 SDK (https://docs.oracle.com/javase/8/docs/technotes/guides/install/windows_jdk_install.html), 

maven (https://www.mkyong.com/maven/how-to-install-maven-in-windows/),

git (https://git-scm.com/download/win)

Microsoft SQL Server 2012 or 2017


### Installing

First clone the project into your home directory.

```git clone https://code.fs.usda.gov/EAD/FIA-BOSS```

Make sure an acceptable version of SQL Server is installed and that TCP/IP Connections are enabled.
(https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-or-disable-a-server-network-protocol?view=sql-server-2017)

make a db, user with password with the same values listed in
https://code.fs.usda.gov/EAD/FIA-BOSS/blob/master/BOSSAPI/BossAPI/src/main/resources/application.properties

don't worry about creating or loading tables the app will take care of that.

navigate to the API directory <install_dir>/BOSSAPI/BossAPI and type


```mvn spring-boot:run```

this will compile and run on localhost:8090.

Navigate to http://localhost:8090/swagger-ui.html
to view a list of available endpoints.

### Testing

To manually run unit tests go to the API install directory and run

```mvn test```

or

```mvn clean install```


