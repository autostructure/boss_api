package us.fed.fs.boss.reports;

import java.math.BigDecimal;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class PayrollForecast {
    
    private BigDecimal grandTotalPayToDate;
    private BigDecimal grandTotalPayForecast;
    private BigDecimal grandTotalFYForecast;
    private List<PayrollForecastRow> rows;
    
}
