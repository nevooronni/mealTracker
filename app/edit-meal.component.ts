import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meals } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div id="edit-meal" *ngIf="childSelectedMeal">
      <div class="move">
        <h1 id="headerEdit">Edit</h1>
        <label>Enter Name:</label>
        <input [(ngModel)]="childSelectedMeal.name">
      </div>
      <div class="move" id="input1">
        <label>Enter Details:</label>  
        <input [(ngModel)]="childSelectedMeal.detail">
      </div>
      <div class="move" id="input2">
        <label>EnterCalories:</label>  
        <input [(ngModel)]="childSelectedMeal.calories">
      </div>
      <div class="move" id="input3">
        <label>Enter Meal ID:</label>  
        <input [(ngModel)]="childSelectedMeal.id">
        <button id="doneNow" (click)="doneClicked()">Done</button>
      </div>
  </div><br/><br/><br/> 

  `
})

export class EditMealComponent {
	@Input() childSelectedMeal: Meals;
  @Output() doneClickedSender = new EventEmitter();//new bridge object
  doneClicked() {
    this.doneClickedSender.emit();//object send through bridge
  }
}
