import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  backdrop = true;
  blurElement = 0;

  onWelcomeGo(clicked: boolean) {
    this.blurElement = 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
