"use strict";
var Meals = (function () {
    function Meals(name, detail, calories, id) {
        this.name = name;
        this.detail = detail;
        this.calories = calories;
        this.id = id;
        this.finished = true;
    }
    return Meals;
}());
exports.Meals = Meals;
//# sourceMappingURL=meal.model.js.map