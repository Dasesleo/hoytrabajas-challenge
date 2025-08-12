package com.hoytrabajas.cart.application;

import com.hoytrabajas.cart.domain.Product;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProductServiceTest {

    private ProductService productService;

    @BeforeEach
    void setUp() {
        productService = new ProductService();
    }

    @Test
    void testFindProductById() {
        Product product = productService.findById(1).orElseThrow();
        assertEquals(1, product.id(), "Product ID should be 1");
        assertEquals("Producto 1", product.name(), "Product name should be 'Producto 1'");
    }

    @Test
    void testProductNotFound() {
        assertFalse(productService.findById(999).isPresent(), "Product with ID 999 should not be found");
    }
}
