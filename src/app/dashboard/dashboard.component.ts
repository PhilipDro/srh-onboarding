import { Component, OnInit, ElementRef } from '@angular/core';
import { ModulesService } from '../modules.service';
import { Module } from '../module';

import { UserService } from "../user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  modules: Module[];

  // tells wether srh tour was clicked or not
  srhTourActive = false;
  // tells wether or not the background is blacked out
  backdrop = true;
  //auto increments with every tap anywhere to activate/highlight certain module
  blurElement = -2;
  //id that initialized the user
  id = 6;
  patientName: string;

  private userService: UserService;

  // new function reference is created after bind() --> need to save to variable
  containerListener;

  constructor(
    private elementRef:ElementRef,
    private modulesService: ModulesService,
    userService: UserService
  ) {
    this.userService = userService;
  }

  ngOnInit() {
    this.getModules();
    this.getPatientData();
  }

  getPatientData() {
    this.userService.getUserById(this.id)
    .then(result => this.resolveResult(result))
          .catch(error => console.log(error));
  }
  resolveResult(result) {
    this.patientName = result.firstname + ' ' + result.lastname;
    console.log(this.patientName);
  }

  getModules(): void {
    this.modules = this.modulesService.getModules();
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
