import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  uri = 'https://gdm-interview-api.azurewebsites.net';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI2NiIsInVuaXF1ZV9uYW1lIjoiaW50ZXJ2aWV3YXBpQGdhcnRuZXIuY29tIiwiZW1haWwiOiJpbnRlcnZpZXdhcGlAZ2FydG5lci5jb20iLCJuYmYiOjE1NDY0NDIxODEsImV4cCI6MTYwNjQ0MjEyMSwiaWF0IjoxNTQ2NDQyMTgxfQ.itszpP5tWLceKxxhUhxi3scg-WPCKT4-3j2I_uWzfgI'
    })
  }
  constructor(private http: HttpClient) { }
  addProduct(Name, Description, Url, CategoryIds) {
    const obj = {
      Name: Name,
      Description: Description,
      Url: Url,
      CategoryIds: CategoryIds
    }
    this.http.post(`${this.uri}/api/v1/Products`, obj, this.httpOptions)
      .subscribe(res => console.log('----->>>>', res));
  }
  getProducts() {
    return this.http.get(`${this.uri}/api/v1/Products`, this.httpOptions);
  }

  getCategories() {
    return this.http.get(`${this.uri}/api/v1/Categories`, this.httpOptions);
  }

  editProduct(id) {
    return this.http.get(`${this.uri}/api/v1/Products/${id}`, this.httpOptions);
  }

  updateProduct(ProductId, Name, Description, Url, Categories) {
    const obj = {
      Name: Name,
      Description: Description,
      Url: Url,
      CategoryIds: Categories
    }
    // console.log('XXXXXXXXXXXXXXXXXXX', obj);
    this
      .http
      .put(`${this.uri}/api/v1/Products/${ProductId}`, obj, this.httpOptions);
  }
}
