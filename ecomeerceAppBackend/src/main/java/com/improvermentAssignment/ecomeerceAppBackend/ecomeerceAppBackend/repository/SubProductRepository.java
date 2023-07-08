package com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.repository;

import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.model.SubProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface SubProductRepository extends JpaRepository<SubProduct,Integer> {
      Optional<SubProduct> findFirstByAttrNameIgnoreCase(String attrName);

      Optional<SubProduct> findFirstByAttrNameIgnoreCaseAndProductId(String attrName, Integer productId);

      List<SubProduct> findByAttrNameContainingIgnoreCaseOrAttrValueContainingIgnoreCase(String attrName, String attrValue);

      List<SubProduct> findByProduct_Id(Integer productId);


}
