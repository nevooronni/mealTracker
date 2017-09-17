import { Component } from '@angular/core';
import { Meals } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <food></food>
    <meal-list 
      [childList]="meals" 
      (clickSender)="showDetails($event)"
      ></meal-list>
      <edit-meal
        [childSelectedMeal]="selectedMeal"
        (doneClickedSender)="finished()"
      ></edit-meal>
      <new-meal
        (newMealSender)="addMeal($event)"
      ></new-meal>
  </div>
  `
})

export class AppComponent {
  public meals: Meals[] = [
    /*new Meals("kuku", "nice", 1995, 0),
    new Meals("pilau", "nice", 1970, 1),
    new Meals("pizza", "very good", 2008, 2),
    new Meals("sembe", "okay", 1996, 3),
    new Meals("nyama choma", "very good", 2015, 4),
    new Meals("samosa", "nice", 1967, 5)*/
  ];
  selectedMeal: Meals = null;
  showDetails(clickedMeal: Meals) {
    this.selectedMeal = clickedMeal;
  }
  finished() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meals) {
    this.meals.push(newMealFromChild);
  }
}

