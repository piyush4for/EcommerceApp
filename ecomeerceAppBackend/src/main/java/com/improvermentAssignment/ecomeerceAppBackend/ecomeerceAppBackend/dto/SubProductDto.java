package com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.dto;

import javax.validation.constraints.NotNull;

public class SubProductDto {
    private Integer id;

    private @NotNull String attrName;
    private @NotNull String attrValue;
    private @NotNull Integer productId;

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public SubProductDto(){}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAttrName() {
        return attrName;
    }

    public void setAttrName(String attrName) {
        this.attrName = attrName;
    }

    public String getAttrValue() {
        return attrValue;
    }

    public void setAttrValue(String attrValue) {
        this.attrValue = attrValue;
    }
}
