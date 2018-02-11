import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.sass'],
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
export class InfobarComponent implements OnInit {
  @Input() infoBar: boolean;
  constructor() { }

  ngOnInit() {
  }

  closeInfoBar() {
    this.infoBar = false;
  }

}
