import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    MainPageComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
