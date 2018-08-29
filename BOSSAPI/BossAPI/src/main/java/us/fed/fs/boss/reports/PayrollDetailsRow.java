/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package us.fed.fs.boss.reports;

import java.math.BigDecimal;

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

    /**
     * @return the section
     */
    public String getSection() {
        return section;
    }

    /**
     * @param section the section to set
     */
    public void setSection(String section) {
        this.section = section;
    }

    /**
     * @return the sectionDescription
     */
    public String getSectionDescription() {
        return sectionDescription;
    }

    /**
     * @param sectionDescription the sectionDescription to set
     */
    public void setSectionDescription(String sectionDescription) {
        this.sectionDescription = sectionDescription;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the ppLeft
     */
    public int getPpLeft() {
        return ppLeft;
    }

    /**
     * @param ppLeft the ppLeft to set
     */
    public void setPpLeft(int ppLeft) {
        this.ppLeft = ppLeft;
    }

    /**
     * @return the regPayPerPP
     */
    public BigDecimal getRegPayPerPP() {
        return regPayPerPP;
    }

    /**
     * @param regPayPerPP the regPayPerPP to set
     */
    public void setRegPayPerPP(BigDecimal regPayPerPP) {
        this.regPayPerPP = regPayPerPP;
    }

    /**
     * @return the regPayToDate
     */
    public BigDecimal getRegPayToDate() {
        return regPayToDate;
    }

    /**
     * @param regPayToDate the regPayToDate to set
     */
    public void setRegPayToDate(BigDecimal regPayToDate) {
        this.regPayToDate = regPayToDate;
    }

    /**
     * @return the overtimeToDate
     */
    public BigDecimal getOvertimeToDate() {
        return overtimeToDate;
    }

    /**
     * @param overtimeToDate the overtimeToDate to set
     */
    public void setOvertimeToDate(BigDecimal overtimeToDate) {
        this.overtimeToDate = overtimeToDate;
    }

    /**
     * @return the regPayForecast
     */
    public BigDecimal getRegPayForecast() {
        return regPayForecast;
    }

    /**
     * @param regPayForecast the regPayForecast to set
     */
    public void setRegPayForecast(BigDecimal regPayForecast) {
        this.regPayForecast = regPayForecast;
    }

    /**
     * @return the totalFYForecast
     */
    public BigDecimal getTotalFYForecast() {
        return totalFYForecast;
    }

    /**
     * @param totalFYForecast the totalFYForecast to set
     */
    public void setTotalFYForecast(BigDecimal totalFYForecast) {
        this.totalFYForecast = totalFYForecast;
    }
}
