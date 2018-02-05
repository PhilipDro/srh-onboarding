import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-srh-tour-game',
  templateUrl: './srh-tour-game.component.html',
  styleUrls: ['./srh-tour-game.component.sass']
})
export class SrhTourGameComponent implements OnInit {
  stage = 1;
  points = 0;

  constructor() { }

  ngOnInit() {
  }

  next(indicator, event: any) {
    if(indicator == 'right') {
      event.target.className += "success";
      this.points ++;
      setTimeout(()=>this.incrStage(),2000);
    }
    else {
      this.incrStage();
    }
  }

  incrStage() {
    this.stage ++;
  }

}
