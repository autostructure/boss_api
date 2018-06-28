package us.fed.fs.boss.reports;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class BudgetSummary {
    
    private List<BudgetSummaryRow> rows;
    private String totalOperating;
    private String totalObligated;
    private String totalBalance;
    
}
