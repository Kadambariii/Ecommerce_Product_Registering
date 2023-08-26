package com.codreal.product.controller;

import java.net.http.HttpHeaders;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.codreal.product.models.User;
import com.codreal.product.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/signin")
	public ResponseEntity<?> signin(@RequestParam("email")String email, @RequestParam("password")String password)
	{
		
		Map<String,String> response=new HashMap<>();
		
		Boolean status=(Boolean) this.userService.signin(email, password);
		System.out.println(status);
		if(status==true)
		{
			response.put("status", "success");
			response.put("message", "Signin successfull!!");
		}
		else
		{
			response.put("status", "failed");
			response.put("message", "Signin failed!!");
		}
		return new ResponseEntity<>(response,HttpStatus.OK);
		}
	
	@PostMapping("/signup")
	public ResponseEntity userSignup(@RequestBody User user)
	{
		return new ResponseEntity<User>(this.userService.signup(user),HttpStatus.CREATED); 
	}
	
	}


