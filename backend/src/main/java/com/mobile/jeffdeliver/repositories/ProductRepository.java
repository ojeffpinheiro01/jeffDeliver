package com.mobile.jeffdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobile.jeffdeliver.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	List<Product> findAllByOrderByNameAsc();

}
