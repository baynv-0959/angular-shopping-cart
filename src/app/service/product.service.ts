import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../shared/models/product'

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';
  private sizeUrl = 'api/sizes';
  products: Product[];

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

  filterProduct(...options): Observable<Product[]> {
    let urlFilter = "api/products?availableSizes=(" + options[0]["sizes"].map((size) => size["name"]).join("|") + ")";

    return this.http.get<Product[]>(urlFilter);
  }
}

function difference(a1, a2) {
  var a2Set = new Set(a2);
  return a1.filter(function (x) { return !a2Set.has(x); });
}
