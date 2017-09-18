"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var meal_model_1 = require('./meal.model');
var NewMealComponent = (function () {
    function NewMealComponent() {
        this.newMealSender = new core_1.EventEmitter(); //create an object to send our inputs to parent component
    }
    NewMealComponent.prototype.addClicked = function (name, details, calories, id) {
        var newMealToAdd = new meal_model_1.Meals(name, details, calories, id);
        this.newMealSender.emit(newMealToAdd); //send the object through the bridge to the app component
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewMealComponent.prototype, "newMealSender", void 0);
    NewMealComponent = __decorate([
        core_1.Component({
            selector: 'new-meal',
            template: "\n  <div id=\"unique2\">\n    <h1 id=\"newMeal\">New Meal</h1>\n    <div id=\"form\">\n      <div>\n        <label> Name:</label>\n        <input #name>\n      </div>\n      <div>\n        <label>Detail:</label>\n        <input #details>\n      </div>\n      <div id=\"calories\">\n        <label>Calories:</label>\n        <input #calories>\n      </div>\n      <div id=\"enter\">\n        <label>EnterID:</label>\n        <input #id>\n    </div>  \n        <button id=\"add\" (click)=\"\n        addClicked(name.value, details.value, calories.value, id.value);\n        name.value='';\n        details.value='';\n        calories.value='';\n        id.value='';\n        \">Add</button>\n      </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewMealComponent);
    return NewMealComponent;
}());
exports.NewMealComponent = NewMealComponent;
//# sourceMappingURL=new-meal.component.js.map