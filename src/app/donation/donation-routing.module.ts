import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: '', redirectTo: 'credit-card' },
  { path: 'credit-card', component: CreditCardComponent },
  { path: 'item', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationRoutingModule { }
