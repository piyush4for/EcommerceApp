package com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.repository;

import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
}