import { Component, trigger, state, style, transition, animate,keyframes } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewDetailPage } from '../new-detail/new-detail';
/*
  Generated class for the Tab1Des page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab1-news',
  templateUrl: 'tab1-news.html',
  animations: [
   trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('1200ms ease-in-out',keyframes([
        style({transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 0}), 
         style( {transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1}) 
          
      ]))
    ])
  ])
   ]

})
export class Tab1NewsPage {

  star:boolean = true;
  logoState: any = "in";

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
  }

  changeStar(){
    this.star = !this.star;
  }
  inToNewDetail(){
    this.navCtrl.push(NewDetailPage);
  }

}
