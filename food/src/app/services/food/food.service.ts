import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): String[]{
    return [
      'assets/img/food/food-1.jpg',
      'assets/img/food/food-2.jpg',
      'assets/img/food/food-3.jpg',
      'assets/img/food/food-4.jpg',
      'assets/img/food/food-5.jpg',
      'assets/img/food/food-6.jpg'
    ]
  }
}
