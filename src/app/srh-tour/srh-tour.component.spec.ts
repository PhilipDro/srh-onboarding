/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SrhTourComponent } from './srh-tour.component';

describe('SrhTourComponent', () => {
  let component: SrhTourComponent;
  let fixture: ComponentFixture<SrhTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrhTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrhTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
