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
var AppComponent = (function () {
    function AppComponent() {
        this.meals = [
            new meal_model_1.Meals("kuku", "nice", 1995, 0),
            new meal_model_1.Meals("pilau", "nice", 1970, 1),
            new meal_model_1.Meals("pizza", "very good", 2008, 2),
            new meal_model_1.Meals("sembe", "okay", 1996, 3),
            new meal_model_1.Meals("nyama choma", "very good", 2015, 4),
            new meal_model_1.Meals("samosa", "nice", 1967, 5)
        ];
        this.selectedMeal = null;
    }
    AppComponent.prototype.showDetails = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
    };
    AppComponent.prototype.finished = function () {
        this.selectedMeal = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n    <h1>Meal Tracker</h1>\n    <pies></pies>\n    <meal-list \n      [childList]=\"meals\" \n      (clickSender)=\"showDetails($event)\"\n      ></meal-list>\n      <edit-meal\n        [childSelectedMeal]=\"selectedMeal\"\n        (doneClickedSender)=\"finished()\"\n      ></edit-meal>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map