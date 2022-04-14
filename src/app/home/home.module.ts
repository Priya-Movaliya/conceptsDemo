import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewhomeComponent } from './viewhome/viewhome.component';
import { InnerhomeComponent } from './home/innerhome/innerhome.component';


@NgModule({
  declarations: [
    HomeComponent,
    ViewhomeComponent,
    InnerhomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
