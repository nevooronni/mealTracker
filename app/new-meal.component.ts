import { Component, Output, EventEmitter } from '@angular/core';
import { Meals } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Meal</h1>
    <div>
      <label>Name:</label>
      <input #name>
    </div>
    <div>
      <label>Details:</label>
      <input #details>
    </div>
    <div>
      <label>Calories:</label>
      <input #calories>
    </div>
    <div>
      <label>Enter Meal ID:</label>
      <input #id>
      <button (click)="
      addClicked(name.value, details.value, calories.value, id.value);
      name.value='';
      details.value='';
      calories.value='';
      id.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
	@Output() newMealSender = new EventEmitter();//create an object to send our inputs to parent component
	addClicked(name: string, details: string, calories: number, id: number) {//after capturing inputs form addclicked(); we store this in variable newMealToAdd
		var newMealToAdd: Meals = new Meals(name, details, calories, id);
		this.newMealSender.emit(newMealToAdd);//send the object through the bridge to the app component
	}
}