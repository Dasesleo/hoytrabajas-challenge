package com.hoytrabajas.cart.application;

import com.hoytrabajas.cart.domain.Cart;
import com.hoytrabajas.cart.domain.Product;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class CartService {
    private final Map<String, Cart> carts = new ConcurrentHashMap<>();

    public Cart get(String cartId) {
        return carts.computeIfAbsent(normalize(cartId), k -> new Cart());
    }

    public Cart add(String cartId, Product product, int quantity) {
        var cart = get(cartId);
        cart.add(product, quantity);
        return cart;
    }

    private String normalize(String id) {
        return (id == null || id.isBlank()) ? "default" : id.trim();
    }
}
