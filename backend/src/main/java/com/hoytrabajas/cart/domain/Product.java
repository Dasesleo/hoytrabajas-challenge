package com.hoytrabajas.cart.domain;

public record Product(int id, String name, int price) {
    public Product {
        if (name == null || name.isBlank())
            throw new IllegalArgumentException("name is required");
        if (price < 0)
            throw new IllegalArgumentException("price must be >= 0");
    }
}
