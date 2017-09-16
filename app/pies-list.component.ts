import { Component } from '@angular/core';

@Component({
  selector: 'food',
  template: `
  <h3>List all of your favorite Meals like:</h3>
  <div *ngFor="let currentPie of favoriteFood">
    <p>{{currentPie}}</p>
  </div>
  `
})

export class FoodListComponent {
  favoriteFood: string[] = ["Pizza", "Nyama Choma", "Ugali Matumbo"];
}