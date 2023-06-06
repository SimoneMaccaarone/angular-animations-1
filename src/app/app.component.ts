
import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        left: '500px',
        opacity: 1
      })),
      state('hide', style({
        left: '-300px',
        opacity: 0
      })),
      transition('show => hide', [
        animate('1s')
      ]),
      transition('hide => show', [
        animate('1s')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'angular-animations';
  isShow = true;

  showHide(){
    this.isShow=!this.isShow;
  }
}
