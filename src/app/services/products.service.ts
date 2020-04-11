import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products: any = [
    { id: '1', img: '/assets/images/products/1.jpg', title: 'Broufin capsule', price: 20 },
    { id: '2', img: '/assets/images/products/2.jpg', title: 'Gaviscon Liq', price: 12},
    { id: '3', img: '/assets/images/products/3.jpg', title: 'Prius Syp', price: 33},
    { id: '4', img: '/assets/images/products/4.jpg', title: 'Risaq Insta', price: 45 },
    { id: '5', img: '/assets/images/products/5.jpg', title: 'Hand sanitizer', price: 80 },
    { id: '6', img: '/assets/images/products/1.jpg', title: 'Broufin capsule', price: 15 },
    { id: '7', img: '/assets/images/products/2.jpg', title: 'Gaviscon', price: 20},
    { id: '8', img: '/assets/images/products/3.jpg', title: 'Prius Syp', price: 11},
    { id: '9', img: '/assets/images/products/4.jpg', title: 'Broufin capsule', price: 15 },
    { id: '10', img: '/assets/images/products/5.jpg', title: 'Risaq Powder', price: 20 },
  ];
  constructor() { }
}
