package com.hoytrabajas.cart.domain;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Cart {
    private final List<CartItem> items = new ArrayList<>();

    public List<CartItem> getItems() {
        return Collections.unmodifiableList(items);
    }

    public boolean isEmpty() {
        return items.isEmpty();
    }

    public void clear() {
        items.clear();
    }

    public void add(Product product) {
        add(product, 1);
    }

    public void add(Product product, int quantity) {
        if (product == null)
            throw new IllegalArgumentException("product is required");
        if (quantity <= 0)
            throw new IllegalArgumentException("quantity must be > 0");

        for (int i = 0; i < items.size(); i++) {
            var it = items.get(i);
            if (it.product().id() == product.id()) {
                items.set(i, it.increment(quantity));
                return;
            }
        }
        items.add(new CartItem(product, quantity));
    }

    public int getTotal() {
        int sum = 0;
        for (var it : items)
            sum += it.lineTotal();
        return sum;
    }
}
