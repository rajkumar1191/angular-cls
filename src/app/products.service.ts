import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  // get, post, put, delete
  addProduct(product: any) {
    return this.http.post<any>(
      'https://jsonplaceholder.typicode.com/users',
      product
    );
  }
}
