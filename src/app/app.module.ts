import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { CustomizationComponent } from './customization/customization.component';
import { SrhTourComponent } from './srh-tour/srh-tour.component';

import { ModulesService } from './services/modules.service';
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
    HttpClientModule
  ],
  providers: [
    ModulesService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
