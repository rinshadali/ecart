import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }


  //http request view all products
  viewAllProducts(){
    return this.http.get("http://localhost:3000/products")
  }

  //add product api call
  addProducts(newproduct:any){
    return this.http.post("http://localhost:3000/products",newproduct)
  }

  //api to get single product data
  viewproduct(id:any){

    return this.http.get("http://localhost:3000/products/"+id)
  }

  // delete product
  deleteProduct(id:any){
    return this.http.delete("http://localhost:3000/products/"+id)
  }

  // edit product
  updateProduct(id:any,data:any){
    return this.http.put("http://localhost:3000/products/"+id,data)
  }

}
