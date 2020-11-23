package be.vdab.angularwebshop.repository;

import be.vdab.angularwebshop.model.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
}