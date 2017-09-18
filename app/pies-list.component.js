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
var FoodListComponent = (function () {
    function FoodListComponent() {
        this.favoriteFood = ["Pizza", "Nyama Choma", "Ugali Matumbo"];
    }
    FoodListComponent = __decorate([
        core_1.Component({
            selector: 'food',
            template: "\n  <div id=\"position\">\n  <h3 id=\"header\">List all of your favorite Meals like:</h3>\n\t  <div *ngFor=\"let currentPie of favoriteFood\">\n\t    <p id=\"p\">{{currentPie}}</p>\n\t  </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FoodListComponent);
    return FoodListComponent;
}());
exports.FoodListComponent = FoodListComponent;
//# sourceMappingURL=pies-list.component.js.map