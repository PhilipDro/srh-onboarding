import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.sass']
})
export class WelcomeScreenComponent implements OnInit {

  @Output() onClickGo = new EventEmitter<boolean>();
  clickedGo = false;

  clickGo(clicked: boolean) {
    this.onClickGo.emit(clicked);
    this.clickedGo = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
