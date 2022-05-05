import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Output() onCloseDialog = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.onCloseDialog.emit();
  }

  redirectToCreditCard() {
    this.router.navigateByUrl('donation/credit-card');
  }

  redirectToItem() {
    this.router.navigateByUrl('donation/item');
  }
}
