import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  addProduct(obj):Observable<any> {
    return <Observable<any>> this.http.post(this.url, obj);
  }

  getProduct(id):Observable<any> {
    return <Observable<any>> this.http.get(`${this.url}/${id}`);
  }

  getAllProducts():Observable<any> {
    return <Observable<any>> this.http.get(this.url);
  }

  updateProduct(prodname, proddesc, prodprice, id):Observable<any> {
    const obj = {
      prodname,
      proddesc,
      prodprice
    };
    console.log(obj);
    return <Observable<any>> this.http.put(`${this.url}/${id}`, obj);
  }

  deleteProduct(id):Observable<any> {
    return <Observable<any>> this.http.delete(`${this.url}/${id}`);
  }
}
