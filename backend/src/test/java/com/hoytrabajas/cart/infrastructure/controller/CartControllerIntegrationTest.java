package com.hoytrabajas.cart.infrastructure.controller;

import com.hoytrabajas.cart.application.CartService;
import com.hoytrabajas.cart.application.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
class CartControllerIntegrationTest {

    @Autowired
    private CartService cartService;

    @Autowired
    private ProductService productService;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(new CartController(cartService, productService)).build();
    }

    @Test
    void testAddProductToCart() throws Exception {
        mockMvc.perform(post("/api/cart")
                .contentType("application/json")
                .content("{\"productId\":1, \"quantity\":2}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.total").value(200));
    }

    @Test
    void testGetCart() throws Exception {
        mockMvc.perform(get("/api/cart")
                .header("X-Cart-Id", "default"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.total").value(0));
    }
}
