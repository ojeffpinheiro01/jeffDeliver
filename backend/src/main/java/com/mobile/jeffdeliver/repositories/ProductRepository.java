package com.mobile.jeffdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobile.jeffdeliver.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}