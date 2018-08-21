/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package us.fed.fs.boss.reports;

import java.math.BigDecimal;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class PayrollDetailsRow {
    private String section;
    private String sectionDescription;
    private String name;
    private int ppLeft;
    private BigDecimal regPayPerPP;
    private BigDecimal regPayToDate;
    private BigDecimal overtimeToDate;
    private BigDecimal regPayForecast;
    private BigDecimal totalFYForecast;
}
