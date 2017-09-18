import { Component } from '@angular/core';

@Component({
  selector: 'food',
  template: `
  <div id="position">
  <h3 id="header">List all of your favorite Meals like:</h3>
	  <div *ngFor="let currentPie of favoriteFood">
	    <p id="p">{{currentPie}}</p>
	  </div>
  </div>
  `
})

export class FoodListComponent {
  favoriteFood: string[] = ["Pizza", "Nyama Choma", "Ugali Matumbo"];
}