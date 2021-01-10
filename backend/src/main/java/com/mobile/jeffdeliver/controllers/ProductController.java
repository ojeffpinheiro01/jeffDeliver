package com.mobile.jeffdeliver.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobile.jeffdeliver.dto.ProductDTO;
import com.mobile.jeffdeliver.services.ProductService;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
	//Dependency injection:
		@Autowired
		private ProductService service;

		//Criando um endpoint
		@GetMapping
		public ResponseEntity<List<ProductDTO>> findAll() {
			List<ProductDTO> list = service.findAll();
			//Retorna um objeto do tipo ResponseEntity:
			return ResponseEntity.ok().body(list);
		}
}
