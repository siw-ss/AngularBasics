import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  products!: Array<any>;

  constructor(private productService : ProductService, private route :ActivatedRoute ) {
    // let productService = new ProductService();
    this.products = productService.productList;
    this.route.queryParamMap.subscribe(value =>{
      const page = value.get('page');
      const order = value.get('orderBy');
      console.log(page);
      console.log(order);
    })
  }

  ngOnInit(): void {
  }

  addNewData(){
    let newProduct:Product = {
      id:7,
      productTitle: 'product 7',
      content : "some text for product 7",
    }
    this.productService.addProduct(newProduct);
  }

  delete(index:number){
    this.productService.removeProduct(index);
  }

}
