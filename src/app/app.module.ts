

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { SimoAnimationsComponent } from './components/simo-animations/simo-animations.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FatButDirective } from './directives/fat-but.directive';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    SimoAnimationsComponent,
    SidenavComponent,
    FatButDirective,
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
