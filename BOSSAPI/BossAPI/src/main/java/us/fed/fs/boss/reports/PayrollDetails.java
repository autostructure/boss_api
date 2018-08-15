package us.fed.fs.boss.reports;

import java.math.BigDecimal;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class PayrollDetails {
    private List<PayrollDetailsRow> rows;
    private BigDecimal totalRegPayToDate;
    private BigDecimal totalOvertimeToDate;
    private BigDecimal totalRegPayForecast;
    private BigDecimal grandTotalFYForecast;
}
