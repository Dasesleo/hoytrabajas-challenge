package com.hoytrabajas.cart.application;

import com.hoytrabajas.cart.domain.Cart;
import com.hoytrabajas.cart.domain.Product;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CartServiceTest {

    private CartService cartService;

    @BeforeEach
    void setUp() {
        cartService = new CartService();
    }

    @Test
    void testAddProductToCart() {
        Product product = new Product(1, "Producto 1", 100);
        Cart cart = cartService.get("default");

        cartService.add("default", product, 2);

        assertEquals(1, cart.getItems().size(), "Cart should have 1 item");
        assertEquals(200, cart.getTotal(), "Cart total should be 200");
    }

    @Test
    void testMultipleCarts() {
        Product product = new Product(2, "Producto 2", 200);

        Cart cart1 = cartService.get("cart1");
        Cart cart2 = cartService.get("cart2");

        cartService.add("cart1", product, 1);
        cartService.add("cart2", product, 2);

        assertEquals(200, cart1.getTotal(), "Cart1 total should be 200");
        assertEquals(400, cart2.getTotal(), "Cart2 total should be 400");
    }
}
