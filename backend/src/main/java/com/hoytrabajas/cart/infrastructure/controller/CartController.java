package com.hoytrabajas.cart.infrastructure.controller;

import com.hoytrabajas.cart.application.CartService;
import com.hoytrabajas.cart.application.ProductService;
import com.hoytrabajas.cart.domain.Cart;
import com.hoytrabajas.cart.domain.Product;
import com.hoytrabajas.cart.infrastructure.dto.AddToCartRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    private final CartService cartService;
    private final ProductService productService;

    public CartController(CartService cartService, ProductService productService) {
        this.cartService = cartService;
        this.productService = productService;
    }

    @GetMapping
    public Cart get(@RequestHeader(value = "X-Cart-Id", required = false) String cartId) {
        return cartService.get(cartId);
    }

    @PostMapping
    public Cart add(@RequestHeader(value = "X-Cart-Id", required = false) String cartId,
            @Valid @RequestBody AddToCartRequest body) {
        Product p = productService.findById(body.productId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "product not found"));
        return cartService.add(cartId, p, body.safeQuantity());
    }
}
