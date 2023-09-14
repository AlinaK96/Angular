import { Component } from '@angular/core';
import { FoodService } from '../../../services/food/food.service';
import { Food } from 'src/app/shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[] = []
  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']){
        this.foods = this.foodService.getAll().filter(food => food.name.toLocaleLowerCase().includes(params['searchTerm'].toLocaleLowerCase()))
      } else {
        this.foods = this.foodService.getAll()
      }
    })
  }

}