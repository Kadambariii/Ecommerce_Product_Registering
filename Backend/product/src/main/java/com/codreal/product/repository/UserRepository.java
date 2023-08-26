package com.codreal.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codreal.product.models.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	
	public User findByEmail(String email);
}
