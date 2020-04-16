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
  inProgressSort = false
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
    if(selected == 0) {
      this.productLoadding = true;
      this.productService.filterProduct({ sizes: this.sizes.filter((value) => value["isSelected"]) })
      .subscribe(products => {
        this.products = products;
        this.productLoadding = false;
      });
    } else if(selected == 1) {
      this.products.sort(function(a, b) {
        return a.id - b.id;
      });
    } else {
      this.products.sort(function(a, b) {
        return b.id - a.id;
      });
    }
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
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

  get isContentLoading(): boolean {
    return !this.productLoadding || !this.inProgressSort;
  }
}
