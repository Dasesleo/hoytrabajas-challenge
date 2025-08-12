package com.hoytrabajas.cart.domain;

public record CartItem(Product product, int quantity) {
    public CartItem {
        if (product == null)
            throw new IllegalArgumentException("product is required");
        if (quantity <= 0)
            throw new IllegalArgumentException("quantity must be > 0");
    }

    public int lineTotal() {
        return product.price() * quantity;
    }

    public CartItem increment(int by) {
        if (by <= 0)
            throw new IllegalArgumentException("increment must be > 0");
        return new CartItem(product, quantity + by);
    }
}
