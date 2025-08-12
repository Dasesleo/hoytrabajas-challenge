package com.hoytrabajas.cart.domain;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CartTest {

    @Test
    void add_increments_quantity_when_product_already_in_cart() {
        var cart = new Cart();
        var p = new Product(1, "P1", 100);

        cart.add(p);
        cart.add(p);

        assertEquals(1, cart.getItems().size(), "Should keep one line per product");
        assertEquals(2, cart.getItems().get(0).quantity(), "Quantity should increment");
    }

    @Test
    void total_sums_price_times_quantity() {
        var cart = new Cart();
        var p1 = new Product(1, "P1", 60);
        var p4 = new Product(4, "P4", 70);

        cart.add(p1);
        cart.add(p4);

        assertEquals(130, cart.getTotal(), "Total should be 60 + 70 = 130");
    }
}
