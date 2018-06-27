package us.fed.fs.boss.reports;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class BudgetSummary {
    private String jobCode;
    private String fiscalYear;
    private String description;
    private String operating;
    private String obligated;
    private String balance;
}
