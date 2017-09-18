import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meals } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
    <div id="top">
      <h3 id="house">View meals by calories</h3>
      <select (change)="onChange($event.target.value)" class="filter">
          <option value="high">High Calorie over 500</option>
          <option value="low" selected="selected">Low calorie under 500</option>
          <option value="all">show All</option>
      </select><br/><br/><br/>
    </div>
    <div class="meals" *ngFor="let meal of childList | calories:selectedCompleteness">
      <h3>Name: {{meal.name}}</h3>
      <h3>Details: {{meal.detail}}</h3>
      <h3>Calories: {{meal.calories}}</h3>
      <h3>ID: {{meal.id}}</h3>
      <button id="edit" (click)="edit(meal)">Edit</button>
    </div>

  `
})

export class MealListComponent {
  public selectedCompleteness: string = "all";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
	@Input() childList: Meals[];//data down 
	@Output() clickSender = new EventEmitter();//custom event emitter for actions up communicate with parent
	edit(taskToEdit: Meals) {//use emit button to send our objects throught the actions up bridge
		this.clickSender.emit(taskToEdit);
	}
}