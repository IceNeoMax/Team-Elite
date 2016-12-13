import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { NavController } from 'ionic-angular';
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
        style({transform: 'translate3d(0,2000px,0'}),
        animate('1500ms ease-in-out')
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

}
