import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-srh-tour-game',
  templateUrl: './srh-tour-game.component.html',
  styleUrls: ['./srh-tour-game.component.sass'],
  animations: [
    trigger('rollInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(400, style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        style({opacity:0})
      ])
    ])
  ]
})
export class SrhTourGameComponent implements OnInit {
  stage = 1;
  points = 0;
  @Input() srhTourStarted: boolean;

  constructor() { }

  ngOnInit() {
  }

  next(indicator, event: any) {
    if(indicator == 'right') {
      event.target.className += " success";
      this.points ++;
      setTimeout(()=>this.incrStage(),1500);
    }
    else { // if wrong
      event.target.className += " wrong";
      setTimeout(()=>this.incrStage(),1500);
    }
  }

  endTour() {
    this.srhTourStarted = false;
  }

  incrStage() {
    this.stage ++;
  }

}
