import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../shared/models/product'
import { Size } from '../shared/models/size'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  sizes: Size[];
  products: Product[];
  productLoadding = false

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getSizes();
    this.getProducts();
  }

  getSizes(): void {
    this.productService.getSizes().subscribe((sizes: any) => {
      this.sizes = sizes.map((size) => { return { name: size, isSelected: false } });
    });
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  onSelect(size: Size, index: number, isChecked: boolean): void {
    this.productLoadding = true;
    this.sizes[index]["isSelected"] = isChecked;
    this.productService.filterProduct({ sizes: this.sizes.filter((value) => value["isSelected"]) })
      .subscribe(products => {
        this.products = products;
        this.productLoadding = false;
      });
  }
}
