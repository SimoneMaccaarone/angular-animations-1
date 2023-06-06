import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { SimoAnimationsComponent } from './components/simo-animations/simo-animations.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    SimoAnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
