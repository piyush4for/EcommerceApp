package com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.controller;

import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.ApiResponse.ApiResponse;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.model.Category;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    CategoryService categoryService;


    @PostMapping("/create")
    public ResponseEntity<ApiResponse> createCategory(@RequestBody Category category) {
        categoryService.createCategory(category);
        return new ResponseEntity<>(new ApiResponse(true, "a new category created"), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public List<Category> listCategory() {
        return categoryService.listCategory();
    }

    @PostMapping("/update/{categoryId}")
    public ResponseEntity<ApiResponse> updateCategory(@PathVariable("categoryId") int categoryId, @RequestBody Category category ) {
        System.out.println("category id " + categoryId);
        if (!categoryService.findById(categoryId)) {
            return new ResponseEntity<ApiResponse>(new ApiResponse(false, "category does not exists"), HttpStatus.NOT_FOUND);
        }
        categoryService.editCategory(categoryId, category);
        return new ResponseEntity<ApiResponse>(new ApiResponse(true, "category has been updated"), HttpStatus.OK);
    }
    @DeleteMapping("/{categoryId}")
    public ResponseEntity<ApiResponse> deleteCategory(@PathVariable Integer categoryId) throws Exception {
        try{
            categoryService.deleteCategory(categoryId);
            return ResponseEntity.ok(new ApiResponse(true, "Category deleted successfully"));
        } catch (Exception e){
            return new ResponseEntity<ApiResponse>(new ApiResponse(false, e.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/byname/{categoryName}")
    public ResponseEntity<ApiResponse> deleteCategoryByCategoryName(@PathVariable String categoryName) throws Exception {
        try {
            categoryService.deleteCategoryByCategoryName(categoryName);
            return ResponseEntity.ok(new ApiResponse(true, "Category deleted successfully"));
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage()), HttpStatus.NOT_FOUND);
        }
    }



}
