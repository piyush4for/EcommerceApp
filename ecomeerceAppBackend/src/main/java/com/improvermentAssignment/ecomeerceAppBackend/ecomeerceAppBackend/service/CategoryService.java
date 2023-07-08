package com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.service;

import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.model.Category;
import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepo;

    public void createCategory(Category category) {
        categoryRepo.save(category);
    }

    public List<Category> listCategory() {
        return categoryRepo.findAll();
    }
    public void editCategory(int categoryId, Category updateCategory) {
        Category category = categoryRepo.getById(categoryId);
        category.setCategoryName(updateCategory.getCategoryName());
        category.setDescription(updateCategory.getDescription());
        category.setImageUrl(updateCategory.getImageUrl());
        categoryRepo.save(category);
    }

    public boolean findById(int categoryId) {
        return categoryRepo.findById(categoryId).isPresent();
    }
    public void deleteCategory(Integer categoryId) throws Exception {
        Optional<Category> optionalCategory = categoryRepo.findById(categoryId);
        if(!optionalCategory.isPresent()){
            throw new Exception("Category not found with id: " + categoryId);
        }
        Category category = optionalCategory.get();
        categoryRepo.delete(category);
    }
    public void deleteCategoryByCategoryName(String categoryName) throws Exception {
        Optional<Category> optionalCategory = categoryRepo.findByCategoryName(categoryName);
        if (!optionalCategory.isPresent()) {
            throw new Exception("Category not found with categoryName: " + categoryName);
        }
        Category category = optionalCategory.get();
        categoryRepo.delete(category);
    }

}
