import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = 'Ürün Listesi';
  products: Product[] = [
    {id: 1, name : 'Laptop', price: 2500, categoryId: 1, description: 'Asus Zenbook', imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'},
    {id: 2, name : 'Mouse', price: 25, categoryId: 2, description: 'A4Tech', imageUrl: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'}
  ];
 ngOnInit(): void {
  }

}
