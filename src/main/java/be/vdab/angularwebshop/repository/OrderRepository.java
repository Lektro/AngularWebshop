package be.vdab.angularwebshop.repository;

import be.vdab.angularwebshop.model.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {
}