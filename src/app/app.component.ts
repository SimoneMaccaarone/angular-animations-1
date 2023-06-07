
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
      transition('show => hide', [animate('1s')]),
      transition('hide => show', [animate('1s')])
    ]),
    trigger('openCloseSidenav',[
      state('open',style({
        right: '0px'
      })),
      state('closed',style({
        right: "-300px"
      })),
      transition('open => closed',[animate('0.5s ease-in')]),
      transition('closed => open',[animate('0.5s ease-in')]),
    ])
  ]
})


export class AppComponent {
  title = 'angular-animations';
  isShow = true;
  isSideBarOpen = false;


  showHide(){
    this.isShow=!this.isShow;
    // document.getElementById('simo')?.classList.toggle('show')
    if(this.isShow){
    document.getElementById('simo')?.classList.add('hide');
    document.getElementById('simo')?.classList.remove('show');
    }else{
      document.getElementById('simo')?.classList.add('show');
      document.getElementById('simo')?.classList.remove('hide');
    }
  }

  showSidebar(){

    this.isSideBarOpen=!this.isSideBarOpen;
  }







}
