import { Component } from '@angular/core';

export interface ICard{
  id: number
  title: string;
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle:boolean = false
  title = 'Cards';

  cards: ICard[] = [
    {
      id: 1,
      title: 'Card 1',
      text: 'Card 1 text'
    },
    {
      id: 2,
      title: 'Card 2',
      text: 'Card 2 text'
    },
    {
      id: 3,
      title: 'Card 3',
      text: 'Card 3 text'
    },
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }
}
