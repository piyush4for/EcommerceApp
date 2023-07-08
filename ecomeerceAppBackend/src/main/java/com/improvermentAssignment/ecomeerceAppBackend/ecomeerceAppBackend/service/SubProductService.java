package com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.service;

import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.dto.ProductDto;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.dto.SubProductDto;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.model.Category;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.model.Product;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.model.SubProduct;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.repository.ProductRepository;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.repository.SubProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
public class SubProductService {
    @Autowired
    SubProductRepository subProductRepository;

    public void createSubProduct(SubProductDto subproductDto, Product product) throws Exception {
        String attrName = subproductDto.getAttrName();
        Integer productId = subproductDto.getProductId();
        Optional<SubProduct> existingSubProduct = subProductRepository.findFirstByAttrNameIgnoreCaseAndProductId(attrName, productId);

        if (existingSubProduct.isPresent()) {
            throw new Exception("Subproduct with this attribute already present");

        } else {
            SubProduct subProduct = new SubProduct();
            subProduct.setAttrName(subproductDto.getAttrName());
            subProduct.setAttrValue(subproductDto.getAttrValue());
            subProduct.setProduct(product);
            subProductRepository.save(subProduct);
        }
    }

    public SubProductDto getSubProductDto(SubProduct subproduct) {
        SubProductDto subproductDto = new SubProductDto();
        subproductDto.setAttrName(subproduct.getAttrName());
        subproductDto.setAttrValue(subproduct.getAttrValue());
        subproductDto.setProductId(subproduct.getProduct().getId());
        subproductDto.setId(subproduct.getId());
        return subproductDto;
    }
    //normal List function to show all products
    public List<SubProductDto> getAllSubProducts() {
        List<SubProduct> allSubProducts = subProductRepository.findAll();

        List<SubProductDto> subproductDtos = new ArrayList<>();
        for(SubProduct subproduct: allSubProducts) {
            subproductDtos.add(getSubProductDto(subproduct));
        }
        return subproductDtos;
    }

    public void updateSubProduct(SubProductDto subproductDto, Integer subproductId) throws Exception {
        Optional<SubProduct> optionalSubProduct = subProductRepository.findById(subproductId);
        if (!optionalSubProduct.isPresent()) {
            throw new Exception("Subproduct not present");
        }
        SubProduct subproduct = optionalSubProduct.get();
        subproduct.setAttrName(subproductDto.getAttrName());
        subproduct.setAttrValue(subproductDto.getAttrValue());
        subProductRepository.save(subproduct);
    }

    public List<SubProduct> searchSubProduct(String term) {
//        return subProductRepository.findByAttrNameContainingIgnoreCaseOrAttrValueContainingIgnoreCase(term, term);
        List<SubProduct> matchingSubProducts = subProductRepository.findByAttrNameContainingIgnoreCaseOrAttrValueContainingIgnoreCase(term, term);

        return matchingSubProducts.stream()
                .filter(subProduct -> subProduct.getProduct().getCategory() != null && subProduct.getProduct() != null)
                .collect(Collectors.toList());
    }
    public List<SubProduct> searchByProductId(Integer productId) {
        return subProductRepository.findByProduct_Id(productId);
    }

    public void deleteSubproduct(Integer subproductId) throws Exception {
        Optional<SubProduct> subProductOptional = subProductRepository.findById(subproductId);
        if(!subProductOptional.isPresent()){
            throw new Exception("subproduct not present");
        }
        SubProduct subProduct = subProductOptional.get();
        subProductRepository.delete(subProduct);
    }
}
