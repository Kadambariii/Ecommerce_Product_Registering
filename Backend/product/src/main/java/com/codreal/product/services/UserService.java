package com.codreal.product.services;

import com.codreal.product.models.User;

public interface UserService {
	
	public Boolean signin(String email, String password);
	public User signup(User user);

}
