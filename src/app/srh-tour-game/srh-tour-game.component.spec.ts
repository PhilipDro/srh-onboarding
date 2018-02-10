/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SrhTourGameComponent } from './srh-tour-game.component';

describe('SrhTourGameComponent', () => {
  let component: SrhTourGameComponent;
  let fixture: ComponentFixture<SrhTourGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrhTourGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrhTourGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
