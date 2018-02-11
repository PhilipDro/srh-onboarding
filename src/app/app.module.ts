import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { CustomizationComponent } from './customization/customization.component';
import { SrhTourComponent } from './srh-tour/srh-tour.component';

import { ModuleService } from './services/module.service';
import { UserService } from './services/user.service';
import { SrhTourGameComponent } from './srh-tour-game/srh-tour-game.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WelcomeScreenComponent,
    CustomizationComponent,
    SrhTourComponent,
    SrhTourGameComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ModuleService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
