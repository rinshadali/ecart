import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private fb:FormBuilder,private ps:ProductserviceService,private router:Router){}

  addProductForm=this.fb.group({
       id:[''],
       productName:[''],
       categoyId:[''],
       description:[''],
       price:[''],
       Is_available:[''],
       productImage:[''],
       rating:[''],
       review:[''],
       warranty:['']
  })


  addNewProduct(){

    let newProductData={
      id:this.addProductForm.value.id,
      productName:this.addProductForm.value.productName,
      categoyId:this.addProductForm.value.categoyId,
      description:this.addProductForm.value.description,
      price:this.addProductForm.value.price,
      Is_available:this.addProductForm.value.Is_available,
      productImage:this.addProductForm.value.productImage,
      rating:this.addProductForm.value.rating,
      review:this.addProductForm.value.review,
      warranty:this.addProductForm.value.warranty

    }
    this.ps.addProducts(newProductData).subscribe((item:any)=>{
      alert('product added')
    })
    this.router.navigateByUrl('product')

  }

}
