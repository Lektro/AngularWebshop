package be.vdab.angularwebshop.repository;

import be.vdab.angularwebshop.model.OrderProduct;
import be.vdab.angularwebshop.model.OrderProductPK;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}