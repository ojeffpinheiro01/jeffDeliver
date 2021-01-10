package com.mobile.jeffdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobile.jeffdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}