package com.hoytrabajas.cart.application;

import com.hoytrabajas.cart.domain.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private static final List<Product> CATALOG = List.of(
            new Product(1, "Producto 1", 100),
            new Product(2, "Producto 2", 200));

    public List<Product> list() {
        return CATALOG;
    }

    public Optional<Product> findById(int id) {
        return CATALOG.stream().filter(p -> p.id() == id).findFirst();
    }
}
