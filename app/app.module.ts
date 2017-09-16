import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { PiesListComponent } from './pies-list.component';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PiesListComponent,
    MealListComponent,
    EditMealComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }