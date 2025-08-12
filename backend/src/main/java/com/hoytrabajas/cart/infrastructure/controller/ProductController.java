package com.hoytrabajas.cart.infrastructure.controller;

import com.hoytrabajas.cart.application.ProductService;
import com.hoytrabajas.cart.domain.Product;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService products;

    public ProductController(ProductService products) {
        this.products = products;
    }

    @GetMapping
    public List<Product> list() {
        return products.list();
    }
}
