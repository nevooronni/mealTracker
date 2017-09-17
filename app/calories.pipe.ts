import {Pipe, PipeTransform} from '@angular/core';
import {Meals} from './meal.model';

@Pipe({
  name: "calories",
  pure: true
})


export class CaloriesPipe implements PipeTransform {
  transform(input: Meals[], desiredCompleteness) {
    var output: Meals[] = [];
    if(desiredCompleteness === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}