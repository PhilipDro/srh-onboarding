import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  backdrop = true;
  blurElement = 0;

  // new function reference is created after bind() --> need to save to variable
  containerListener;

  constructor(private elementRef:ElementRef) { }

  onWelcomeGo(clicked: boolean) {
    // add event listener to main.container to go through tutorial when wecome "Go" is clicked
    this.containerListener = this.tapAnywhere.bind(this)
    this.elementRef.nativeElement.querySelector('main.container')
    .addEventListener('click', this.containerListener);

  }

  // when user taps anywhere after starting tour
  tapAnywhere() {
    this.blurElement ++;
    if(this.blurElement == 8) {
      this.backdrop = false;
      this.blurElement = -1;
      this.elementRef.nativeElement.querySelector('main.container')
      .removeEventListener('click', this.containerListener);
    }
  }

  ngOnInit() {
  }

}
