package com.codreal.product.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codreal.product.models.User;
import com.codreal.product.repository.UserRepository;

@Service
public class UserServiceImplementation implements UserService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public Boolean signin(String email, String password) {
		User user=userRepository.findByEmail(email);
		if(user!=null)
		{
			if(password.equals(user.getPassword()))
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		return false;
	}

	@Override
	public User signup(User user) {
		
		return this.userRepository.save(user);
	}

}
