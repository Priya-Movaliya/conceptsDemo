import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ViewdataComponent } from './viewdata/viewdata.component';


@NgModule({
  declarations: [
    AdminComponent,
    ViewdataComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule implements OnInit {
  ngOnInit(): void {
    console.log("admin module");
  }
}
