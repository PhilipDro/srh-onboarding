import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  backdrop = true;
  blurElement = 0;


  constructor(private elementRef:ElementRef) { }

  onWelcomeGo(clicked: boolean) {
    // add event listener to main.container to go through tutorial
    this.elementRef.nativeElement.querySelector('main.container')
    .addEventListener('click', this.tapAnywhere.bind(this));
  }

  // when user taps anywhere after starting tour
  tapAnywhere() {
    this.blurElement ++;
  }

  ngOnInit() {
  }

}
