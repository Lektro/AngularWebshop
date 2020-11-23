package be.vdab.angularwebshop.restcontroller;

import be.vdab.angularwebshop.model.Product;
import be.vdab.angularwebshop.repository.ProductRepository;
import be.vdab.angularwebshop.service.ProductService;
import be.vdab.angularwebshop.service.ProductServiceImpl;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/products")
public class ProductRestController {

    private ProductService productService;

    public ProductRestController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = { "", "/" })
    public @NotNull Iterable<Product> getProducts() {
        return productService.getAllProducts();
    }
}
