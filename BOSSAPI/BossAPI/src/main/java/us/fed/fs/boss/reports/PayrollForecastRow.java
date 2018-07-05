package us.fed.fs.boss.reports;

import java.math.BigDecimal;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class PayrollForecastRow {
    
    private String activityCode;
    private String activityCodeDescription;
    private BigDecimal regPayToDate;
    private BigDecimal regPayForecast;
    private BigDecimal totalFYForecast;
    
}
