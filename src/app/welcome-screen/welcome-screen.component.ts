import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.sass'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(200, style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(200, style({
          opacity:0,
          position: 'absolute',
          top: '30%'
        }))
      ])
    ])
  
]
})
export class WelcomeScreenComponent implements OnInit {
  state = 'active';

  constructor() { }

  ngOnInit() {
  }

  @Input() patientName: string;

  @Output() onClickGo = new EventEmitter<boolean>();
  clickedGo = false;
  @Output() onClickSkip = new EventEmitter<boolean>();
  clickedSkip = false;

  clickGo(clicked: boolean) {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
    this.onClickGo.emit(clicked);
    this.clickedGo = true;
  }

  clickSkip(clicked: boolean) {
    this.onClickSkip.emit(clicked);
    this.clickedSkip = true;
  }
}
