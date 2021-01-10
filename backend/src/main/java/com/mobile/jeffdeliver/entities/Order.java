package com.mobile.jeffdeliver.entities;

import java.time.Instant;

public class Order {
	
	private static final long serialVersionUID = 1L;

	private Long id;
	private String address;
	private Double latitude;
	private Double longitude;
	private Instant moment;
	private OrderStatus status;
}
