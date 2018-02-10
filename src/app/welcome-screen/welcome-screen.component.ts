import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.sass']
})
export class WelcomeScreenComponent implements OnInit {
  @Input() patientName: string;

  @Output() onClickGo = new EventEmitter<boolean>();
  clickedGo = false;
  @Output() onClickSkip = new EventEmitter<boolean>();
  clickedSkip = false;

  clickGo(clicked: boolean) {
    this.onClickGo.emit(clicked);
    this.clickedGo = true;
  }

  clickSkip(clicked: boolean) {
    this.onClickSkip.emit(clicked);
    this.clickedSkip = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
