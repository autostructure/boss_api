package gov.usda.fs.ead.boss.dto;

import java.io.Serializable;

public class FieldEquipmentDTO implements Serializable {
    
    private Long id;
    private String equipmentCode;
    private String description;
    private String category;
    private Short desiredQuantityOnHand;
    private Short quantityPerIndividual;
    private Short quantityPerAreaLeader;
    private Short sizeColor;
    private Short sizeOrder;
    private boolean loadDefault;
    private boolean retired;

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the equipmentCode
     */
    public String getEquipmentCode() {
        return equipmentCode;
    }

    /**
     * @param equipmentCode the equipmentCode to set
     */
    public void setEquipmentCode(String equipmentCode) {
        this.equipmentCode = equipmentCode;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return the category
     */
    public String getCategory() {
        return category;
    }

    /**
     * @param category the category to set
     */
    public void setCategory(String category) {
        this.category = category;
    }

    /**
     * @return the desiredQuantityOnHand
     */
    public Short getDesiredQuantityOnHand() {
        return desiredQuantityOnHand;
    }

    /**
     * @param desiredQuantityOnHand the desiredQuantityOnHand to set
     */
    public void setDesiredQuantityOnHand(Short desiredQuantityOnHand) {
        this.desiredQuantityOnHand = desiredQuantityOnHand;
    }

    /**
     * @return the quantityPerIndividual
     */
    public Short getQuantityPerIndividual() {
        return quantityPerIndividual;
    }

    /**
     * @param quantityPerIndividual the quantityPerIndividual to set
     */
    public void setQuantityPerIndividual(Short quantityPerIndividual) {
        this.quantityPerIndividual = quantityPerIndividual;
    }

    /**
     * @return the quantityPerAreaLeader
     */
    public Short getQuantityPerAreaLeader() {
        return quantityPerAreaLeader;
    }

    /**
     * @param quantityPerAreaLeader the quantityPerAreaLeader to set
     */
    public void setQuantityPerAreaLeader(Short quantityPerAreaLeader) {
        this.quantityPerAreaLeader = quantityPerAreaLeader;
    }

    /**
     * @return the sizeColor
     */
    public Short getSizeColor() {
        return sizeColor;
    }

    /**
     * @param sizeColor the sizeColor to set
     */
    public void setSizeColor(Short sizeColor) {
        this.sizeColor = sizeColor;
    }

    /**
     * @return the sizeOrder
     */
    public Short getSizeOrder() {
        return sizeOrder;
    }

    /**
     * @param sizeOrder the sizeOrder to set
     */
    public void setSizeOrder(Short sizeOrder) {
        this.sizeOrder = sizeOrder;
    }

    /**
     * @return the loadDefault
     */
    public boolean isLoadDefault() {
        return loadDefault;
    }

    /**
     * @param loadDefault the loadDefault to set
     */
    public void setLoadDefault(boolean loadDefault) {
        this.loadDefault = loadDefault;
    }

    /**
     * @return the retired
     */
    public boolean isRetired() {
        return retired;
    }

    /**
     * @param retired the retired to set
     */
    public void setRetired(boolean retired) {
        this.retired = retired;
    }
    
}
