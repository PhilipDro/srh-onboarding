import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-srh-tour',
  templateUrl: './srh-tour.component.html',
  styleUrls: ['./srh-tour.component.sass'],
  animations: [
    trigger('rollInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(300, style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(300, style({
          opacity:0,
          // position: 'absolute',
          // top: '30%'
        }))
      ])
    ])
  ]
})
export class SrhTourComponent implements OnInit {
  srhTourStarted = false;

  constructor() { }

  ngOnInit() {
  }

}
