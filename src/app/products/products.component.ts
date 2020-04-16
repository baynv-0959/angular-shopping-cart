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
  productLoadding = true
  inProgressSort = true
  items: any[] = [
    { id: 0, name: 'Select' },
    { id: 1, name: 'Lowest to highest' },
    { id: 2, name: 'Highest to lowest' }
  ];
  selected: number = 0;

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

  selectOption(selected: number) {
    this.productLoadding = true;
    if(selected == 0) {
      this.productService.filterProduct({ sizes: this.sizes.filter((value) => value["isSelected"]) })
      .subscribe(products => {
        this.products = products;
        setTimeout(() => { this.productLoadding = false }, 500);
      });
    } else if(selected == 1) {
      this.products.sort(function(a, b) {
        return a.id - b.id;
      });
      setTimeout(() => { this.productLoadding = false }, 500);
    } else {
      this.products.sort(function(a, b) {
        return b.id - a.id;
      });
      setTimeout(() => { this.productLoadding = false }, 500);
    }
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products
        this.productLoadding = false;
      });
  }

  onSelect(index: number, isChecked: boolean): void {
    this.productLoadding = true;
    this.sizes[index]["isSelected"] = isChecked;
    this.productService.filterProduct({ sizes: this.sizes.filter((value) => value["isSelected"]) })
      .subscribe(products => {
        this.products = products;
        this.productLoadding = false;
      });
  }

  get loadSuccess(): boolean {
    return !(this.productLoadding && this.inProgressSort);
  }
}
