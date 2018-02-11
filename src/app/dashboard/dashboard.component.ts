import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { UserService } from "../services/user.service";
import { ModuleService } from '../services/module.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
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
    ]),
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
export class DashboardComponent implements OnInit {
  // tells wether srh tour was clicked or not
  srhTourActive = false;
  // tells wether or not the background is blacked out
  backdrop = true;
  //auto increments with every tap anywhere to activate/highlight certain module /remove blur
  blurElement = -2;

  //id that initialized the user
  id = 6;
  patientName: string;

  // dashboard module properties
  moduleId = 3;
  moduleName: string;
  moduleDescription: string;
  moduleImage: string;
  modulePath = '../assets/images/';

  modules: any[];

  private moduleService: ModuleService;
  private userService: UserService;

  // new function reference is created after bind() --> need to save to variable
  containerListener;

  constructor(
    private elementRef:ElementRef,
    userService: UserService,
    moduleService: ModuleService
  ) {
    this.userService = userService;
    this.moduleService = moduleService;
  }

  ngOnInit() {
    this.getModules();
    this.getPatientData();
  }

  getPatientData() {
    this.userService.getUserById(this.id)
    .then(result => this.resolvePatientResult(result))
          .catch(error => console.log(error));
  }
  resolvePatientResult(result) {
    this.patientName = result.firstname + ' ' + result.lastname;
  }

  getModules() {
    this.moduleService.getModuleById(this.moduleId)
    .then(result => this.resolveModuleResult(result))
          .catch(error => console.log(error));
  }
  resolveModuleResult(result) {
    this.modules = result;
    this.moduleName = this.modules[0].name;
    this.moduleDescription = this.modules[0].description;
    this.moduleImage = this.modules[0].image;
  }

  onWelcomeGo(clicked: boolean) {
    this.blurElement = -2;
    this.backdrop = true;
    // add event listener to main.container to go through tutorial when wecome "Go" is clicked
    this.containerListener = this.tapAnywhere.bind(this)
    this.elementRef.nativeElement.querySelector('main.container')
    .addEventListener('click', this.containerListener);
  }

  removeBackdrop() {
    this.backdrop = false;
    this.blurElement = -3;
    this.elementRef.nativeElement.querySelector('main.container')
    .removeEventListener('click', this.containerListener);

    // add event listener on module to click
    // this.elementRef.nativeElement.querySelector('.module-box')
    // .addEventListener('click', this.toggleSrhTour());
  }

  // when user taps anywhere after starting tour
  tapAnywhere() {
    this.blurElement ++;
    // alert(this.blurElement);
    // when every element was shown
    if(this.blurElement == 6) {
      this.backdrop = false;
      this.blurElement = -3;
      this.elementRef.nativeElement.querySelector('main.container')
      .removeEventListener('click', this.containerListener);
      // // add event listener on module to click
      // this.elementRef.nativeElement.querySelector('.module-box')
      // .addEventListener('click', this.toggleSrhTour());
    }
  }

  toggleSrhTour() {
    if(this.blurElement > -3) {
      this.srhTourActive = false;
    }
    else {
      this.srhTourActive = true;
    }
  }

}
