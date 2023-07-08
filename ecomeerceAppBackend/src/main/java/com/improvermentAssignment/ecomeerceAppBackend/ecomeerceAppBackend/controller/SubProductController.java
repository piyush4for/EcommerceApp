package com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.controller;

import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.ApiResponse.ApiResponse;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.dto.SubProductDto;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.model.Product;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.model.SubProduct;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.repository.ProductRepository;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.service.SubProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product/subproduct")
public class SubProductController {
    @Autowired
    SubProductService subProductService;

    @Autowired
    ProductRepository productRepository;

    @PostMapping("/add")
    public ResponseEntity<ApiResponse> createSubProduct(@RequestBody SubProductDto subProductDto) throws Exception {
        Optional<Product> optionalProduct = productRepository.findById(subProductDto.getProductId());
        if(!optionalProduct.isPresent()){
            return new ResponseEntity<ApiResponse>(new ApiResponse(false,"product does not exists"), HttpStatus.BAD_REQUEST);
        }
        try{
            subProductService.createSubProduct(subProductDto,optionalProduct.get());
            return new ResponseEntity<ApiResponse>(new ApiResponse(true,"subproduct has been added"),HttpStatus.CREATED);
        } catch (Exception e){
            //created this exceotion for subproduct already exist then
            return new ResponseEntity<ApiResponse>(new ApiResponse(false, e.getMessage()), HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/")
    public ResponseEntity<List<SubProductDto>> getSubProducts(){
        List<SubProductDto> subproducts = subProductService.getAllSubProducts();
        return new ResponseEntity<>(subproducts,HttpStatus.OK);
    }

    @PostMapping("/update/{subproductId}")
    public ResponseEntity<ApiResponse> updateSubProduct(@PathVariable("subproductId") Integer subproductId, @RequestBody SubProductDto subProductDto) throws Exception{
        Optional<Product> optionalProduct = productRepository.findById(subProductDto.getProductId());
        if(!optionalProduct.isPresent()){
            return new ResponseEntity<ApiResponse>(new ApiResponse(false,"product does not exists"), HttpStatus.BAD_REQUEST);
        }
        try{
        subProductService.updateSubProduct(subProductDto,subproductId);
        return new ResponseEntity<ApiResponse>(new ApiResponse(true,"subproduct has been updated"), HttpStatus.OK);
        } catch (Exception e){
            //created this exceotion for subproduct already exist then
            return new ResponseEntity<ApiResponse>(new ApiResponse(false, e.getMessage()), HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping("/{subproductId}")
    public ResponseEntity<ApiResponse> deleteSubproduct(@PathVariable("subproductId") Integer subproductId) {
        try {
            subProductService.deleteSubproduct(subproductId);
            return ResponseEntity.ok(new ApiResponse(true, "Subproduct deleted successfully"));
        } catch (Exception e) {
            return new ResponseEntity<ApiResponse>(new ApiResponse(false, e.getMessage()),HttpStatus.BAD_REQUEST);
        }
    }

    //search
    @GetMapping("/search")
    public ResponseEntity<List<SubProduct>> searchSubProducts(@RequestParam("term") String term) {
        List<SubProduct> subProducts = subProductService.searchSubProduct(term);
        return ResponseEntity.ok(subProducts);
    }

    @GetMapping("/search2")
    public ResponseEntity<List<SubProduct>> searchByProductId(@RequestParam("productId") Integer productId) {
        List<SubProduct> subProducts = subProductService.searchByProductId(productId);
        return ResponseEntity.ok(subProducts);
    }

//    @GetMapping
//    public List<SubProduct> searchSubProducts(@RequestParam String searchTerm) {
//        return subProductService.searchByTerm(searchTerm);
//    }
}
