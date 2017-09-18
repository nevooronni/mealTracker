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
var MealListComponent = (function () {
    function MealListComponent() {
        this.selectedCompleteness = "all";
        this.clickSender = new core_1.EventEmitter(); //custom event emitter for actions up communicate with parent
    }
    MealListComponent.prototype.onChange = function (optionFromMenu) {
        this.selectedCompleteness = optionFromMenu;
        console.log(this.selectedCompleteness);
    };
    MealListComponent.prototype.edit = function (taskToEdit) {
        this.clickSender.emit(taskToEdit);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MealListComponent.prototype, "childList", void 0);
    __decorate([
        //data down 
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MealListComponent.prototype, "clickSender", void 0);
    MealListComponent = __decorate([
        core_1.Component({
            selector: 'meal-list',
            template: "\n    <div id=\"top\">\n      <h3 id=\"house\">View meals by calories</h3>\n      <select (change)=\"onChange($event.target.value)\" class=\"filter\">\n          <option value=\"high\">High Calorie over 500</option>\n          <option value=\"low\" selected=\"selected\">Low calorie under 500</option>\n          <option value=\"all\">show All</option>\n      </select><br/><br/><br/>\n    </div>\n    <div class=\"meals\" *ngFor=\"let meal of childList | calories:selectedCompleteness\">\n      <h3>Name: {{meal.name}}</h3>\n      <h3>Details: {{meal.detail}}</h3>\n      <h3>Calories: {{meal.calories}}</h3>\n      <h3>ID: {{meal.id}}</h3>\n      <button id=\"edit\" (click)=\"edit(meal)\">Edit</button>\n    </div>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=meal-list.component.js.map