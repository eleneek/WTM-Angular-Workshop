import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationRoutingModule } from './donation-routing.module';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    CreditCardComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    DonationRoutingModule
  ]
})
export class DonationModule { }
