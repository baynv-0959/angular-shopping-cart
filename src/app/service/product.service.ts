import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../shared/models/product'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';
  private sizeUrl = 'api/sizes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getSizes(): Observable<String[]> {
    return this.http.get<String[]>(this.sizeUrl);
  }

  filterProduct(sizes: Object): Observable<Product[]> {
    let urlFilter = "api/products?availableSizes=(" + sizes["sizes"].map((size) => size["name"]).join("|") + ")";

    return this.http.get<Product[]>(urlFilter);
  }
}
