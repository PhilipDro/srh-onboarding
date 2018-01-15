import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { CustomizationComponent } from './customization/customization.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WelcomeScreenComponent,
    CustomizationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
