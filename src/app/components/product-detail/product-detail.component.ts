import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId:any;
  product:any;
  name:any;
ngOnInit(): void {
  this.productService.getProductById(this.productId).subscribe((response)=>{
    this.product=response;
  })
}

  constructor(private router:Router,private productService:ProductService, private activatedRoute: ActivatedRoute){
      this.productId = this.activatedRoute.snapshot.params["id"];
    // if(this.activatedRoute.snapshot.params["id"] == "new"){
    //   this.productId=""
    // }else{
    //   this.productId = this.activatedRoute.snapshot.params['id'];
    //   console.log(this.activatedRoute.snapshot.params)
    // }
  }
  
  productForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
    ]),
    type: new FormControl('',[
      Validators.required,
      Validators.maxLength(56)
    ]),
    description: new FormControl('',[
      Validators.required,
      Validators.maxLength(56)
    ]),
    color: new FormControl('',[
      Validators.required,
      Validators.maxLength(56)
    ]),
    price: new FormControl('',[
      Validators.min(0)
    ]),
  });

  get getName(){
    return this.productForm.controls['name'];
  }
  get getType(){
    return this.productForm.controls['type'];
  }
  get getDescription(){
    return this.productForm.controls['description'];
  }
  get getColor(){
    return this.productForm.controls['color'];
  }
  get getPrice(){
    return this.productForm.controls['price'];
  }
  


  add(){
    if(this.productForm.status=="VALID"){
      this.productService.editProduct(this.productId,this.productForm.value).subscribe((response)=>{
      })
      this.router.navigate(["/productList"])
    }else{
      console.log("Error")
    }
  }
}
