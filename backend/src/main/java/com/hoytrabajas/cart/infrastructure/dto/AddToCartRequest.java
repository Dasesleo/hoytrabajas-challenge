package com.hoytrabajas.cart.infrastructure.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record AddToCartRequest(
        @NotNull(message = "productId is required") Integer productId,
        @Min(value = 1, message = "quantity must be >= 1") Integer quantity) {
    public int safeQuantity() {
        return (quantity == null) ? 1 : quantity;
    }
}
