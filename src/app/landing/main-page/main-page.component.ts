import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  dialogVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDialog() {
    this.dialogVisible = true;
  }

  onCloseDialog() {
    this.dialogVisible = false;
  }

}
