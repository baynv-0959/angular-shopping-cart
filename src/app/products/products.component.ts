import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../shared/models/product'
import { Size } from '../shared/models/size'
import { Cart } from "../shared/models/cart";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productLoadding = true;
  inProgressSort = true;
  inProgressLoadCart = false;
  showCart = false;
  sizes: Size[];
  products: Product[];
  carts: Cart[];
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
    this.getCarts();
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

  getCarts(): void {
    this.inProgressLoadCart = true;
    let cartJson = localStorage.getItem('carts');
    this.carts = JSON.parse(cartJson) || [];
    this.inProgressLoadCart = false;
  }

  addToCart(product: Product): void {
    this.inProgressLoadCart = true;
    let product_ids = this.carts.map((cart) => {
      return cart.product.id;
    })

    if(product_ids.includes(product.id)) {
      const isLargeNumber = (element) => element.product.id == product.id;
      let index = this.carts.findIndex(isLargeNumber);
      this.carts[index]["count"] ++;
    } else {
      this.carts.push({product: product, count: 1});
    }

    this.inProgressLoadCart = false;
    this.showCart = true;
    localStorage.setItem('carts', JSON.stringify(this.carts));
  }

  removeCart(cart: Cart): void {
    this.inProgressLoadCart = true;
    const isLargeNumber = (element) => element == cart;
    let index = this.carts.findIndex(isLargeNumber);
    if (index !== -1) this.carts.splice(index, 1);
    this.inProgressLoadCart = false;
    debugger
    localStorage.setItem('carts', JSON.stringify(this.carts));
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

  totalPrice(): number {
    if (this.carts.length == 0) return 0;

    return this.carts.map((cart) => {
      return cart.product.price * cart.count
    }).reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  countProducts(): number {
    if (this.carts.length == 0) return 0;

    return this.carts.map((cart) => {
      return cart.count
    }).reduce((accumulator, currentValue) => accumulator + currentValue);
  }
}
