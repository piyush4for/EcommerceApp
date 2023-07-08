package com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private @NotNull String name;
    private @NotNull String imageURL;
    private @NotNull double price;
    private @NotNull String description;


//    @ManyToOne
//    @JoinColumn(name = "category_id")
//    Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    private Category category;


    @OneToMany(mappedBy = "product",cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private List<SubProduct> subproducts=new ArrayList<>();


    public List<SubProduct> getSubproducts() {
        return subproducts;
    }

    public void setSubproducts(List<SubProduct> subproducts) {
        this.subproducts = subproducts;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}