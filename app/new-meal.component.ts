import { Component, Output, EventEmitter } from '@angular/core';
import { Meals } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div id="unique2">
    <h1 id="newMeal">New Meal</h1>
    <div id="form">
      <div>
        <label> Name:</label>
        <input #name>
      </div>
      <div>
        <label>Detail:</label>
        <input #details>
      </div>
      <div id="calories">
        <label>Calories:</label>
        <input #calories>
      </div>
      <div id="enter">
        <label>EnterID:</label>
        <input #id>
    </div>  
        <button id="add" (click)="
        addClicked(name.value, details.value, calories.value, id.value);
        name.value='';
        details.value='';
        calories.value='';
        id.value='';
        ">Add</button>
      </div>
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