import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(900, style({opacity:1}))
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
export class SidebarComponent implements OnInit {
  @Input() blurElement: number;
  @Input() patientName: string;

  constructor() { }

  ngOnInit() {
  }

}
