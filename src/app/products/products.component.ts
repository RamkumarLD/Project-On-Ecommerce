import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // imgsrc"https://n3.sdlcdn.com/imgs/e/v/o/SDL044502225_1-6ee47.jpg",


 

  products: any[] =[
    
    {
    id:"101",
    img:"../assets/Desert.jpg",
    price:"$345"

  },
  {
    id:"102",
    img:"https://n3.sdlcdn.com/imgs/e/v/o/SDL044502225_1-6ee47.jpg",
    price:"$350"

  },
  {
    id:"103",
    img:"https://n3.sdlcdn.com/imgs/e/v/o/SDL044502225_1-6ee47.jpg",
    price:"$355"

  },
  {
    id:"104",
    img:"https://n3.sdlcdn.com/imgs/e/v/o/SDL044502225_1-6ee47.jpg",
    price:"$360"

  },
  {
    id:"105",
    img:"https://n3.sdlcdn.com/imgs/e/v/o/SDL044502225_1-6ee47.jpg",
    price:"$345"

  },
  {
    id:"106",
    img:"https://n3.sdlcdn.com/imgs/e/v/o/SDL044502225_1-6ee47.jpg",
    price:"$345"

  },
  {
    id:"107",
    img:"https://n3.sdlcdn.com/imgs/e/v/o/SDL044502225_1-6ee47.jpg",
    price:"$345"

  },
  {
    id:"108",
    img:"https://n3.sdlcdn.com/imgs/e/v/o/SDL044502225_1-6ee47.jpg",
    price:"$345"

  },
  {
    id:"109",
    img:"https://n3.sdlcdn.com/imgs/e/v/o/SDL044502225_1-6ee47.jpg",
    price:"$345"

  },
  {
    id:"110",
    img:"https://n3.sdlcdn.com/imgs/e/v/o/SDL044502225_1-6ee47.jpg",
    price:"$360"

  },
]

idProd:string;
prodPrice:number;
imgProd:string;
// k: number = this.products.length;
addProd(){
  this.products.push({id:this.idProd, img:this.imgProd, price:`$`+this.prodPrice});
  this.products.length +1;
}


  constructor() { }

  ngOnInit() {
  }
 
}
