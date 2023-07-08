package com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "subproducts")
public class SubProduct {

    @Id@GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private @NotNull String attrName;
    private @NotNull String attrValue;

//    @ManyToOne
//    @JoinColumn(name="products_id")
//    Product product;

    @ManyToOne(fetch=FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "products_id")
    Product product;

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

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

}