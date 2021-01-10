package com.mobile.jeffdeliver.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobile.jeffdeliver.dto.OrderDTO;
import com.mobile.jeffdeliver.services.OrderService;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {
	//Dependency injection:
		@Autowired
		private OrderService service;

		//Criando um endpoint
		@GetMapping
		public ResponseEntity<List<OrderDTO>> findAll() {
			List<OrderDTO> list = service.findAll();
			//Retorna um objeto do tipo ResponseEntity:
			return ResponseEntity.ok().body(list);
		}
}
