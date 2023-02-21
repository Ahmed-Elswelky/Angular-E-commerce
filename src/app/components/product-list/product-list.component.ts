import { Component, OnInit,  } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  p:any;
  product:any;
  products:any=[];
  filteredProducts:any=[];
  _filterText:any;
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response)=>{
      this.products = response;
      this.filteredProducts = this.products;
    })
  }
  get filterText(){
    return this._filterText;
  }

  set filterText(value:any){
    this._filterText = value;
    this.filteredProducts = this.filterProductsByColor(value)

  }
  removeProduct(productId:number){
    this.productService.deleteProduct(productId).subscribe((response)=>{
      this.filteredProducts = this.filteredProducts.filter((product:any)=> product.id != productId)
    })
  }

  filterProductsByColor(filterTerm:any){
    if(this.products.length==0 || this.filterText==""){
      return this.products;
    }else{
      return this.products.filter((product:any)=>{
        return product.color==filterTerm
      })
    }


  }
}

