import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  id=""
  title=""
  description=""
  price=""
  discountPercentage=""
  rating=""
  stock=""
  brand=""
  category=""
  thumbnail=""

  ngOnInit(): void {
  }

read=()=>{
  let data={
    "id":"this.id",
    "title":"this.title",
    "description":"this.description",
    "price":"this.price",
    "discountPercentage":"this.discountPercentage",
    "rating":"this.rating",
    "stock":"this.stock",
    "brand":"this.brand",
    "category":"this.category",
    "thumbnail":"this.thumbnail"
   
  }
  console.log(data)
}
}
