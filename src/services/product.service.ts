import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "http://localhost:3005/products";
  constructor(private client:HttpClient) { }

getAllProducts(){
  return this.client.get(this.baseUrl);
}

getProductById(productId:any){
  return this.client.get(`${this.baseUrl}/${productId}`);
}

addProduct(product:any){
  return this.client.post(`${this.baseUrl}`,product);
}

editProduct(productId:any,product:any){
  return this.client.put(`${this.baseUrl}/${productId}`,product);
}

deleteProduct(productId:any){
  return this.client.delete(`${this.baseUrl}/${productId}`)

}
}
