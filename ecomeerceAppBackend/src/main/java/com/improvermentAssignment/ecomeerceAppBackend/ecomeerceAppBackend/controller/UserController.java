package com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.controller;

import com.improvermentAssignment.ecomeerceAppBackend.ecomeerceAppBackend.ApiResponse.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class UserController {
    @PostMapping("/")
    public ResponseEntity<ApiResponse> doingLogin(@RequestParam String username, @RequestParam String password){
        String hardcodedUsername = "pilnu@gmail.com";
        String hardcodedPassword = "1234";

        try{
            if (username.equalsIgnoreCase(hardcodedUsername) && password.equals(hardcodedPassword)) {
                // Login successful
                return new ResponseEntity<>(new ApiResponse(true,"loged in"), HttpStatus.CREATED);
            }
            else return new ResponseEntity<>(new ApiResponse(false,"wrong id password"), HttpStatus.NOT_FOUND);
        }catch (Exception e){
            return new ResponseEntity<>(new ApiResponse(false,e.getMessage()),HttpStatus.NOT_FOUND);
        }

    }
}
