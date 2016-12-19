import { Component, trigger, state, style, transition, animate,keyframes } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the NewDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-detail',
  templateUrl: 'new-detail.html',
  animations: [
   trigger('fadeInUp', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('900ms ease-in-out',keyframes([
        style({opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 0}), 
         style( {opacity: '1', transform: 'none', offset: 1}) 
          
      ]))
    ])
  ]),
  trigger('fadeInUp2', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('1600ms ease-in',keyframes([
          style({transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 0}), 
          style({transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4}) ,
          style({transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '1', offset: 0.6}),
          style({transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', opacity: '1',offset: 0.8}), 
          style({transform: 'perspective(400px)', opacity: '1', offset: 1}) 
      ]))
    ])
  ])
  ]
})
export class NewDetailPage {

  logoState: any = "in";

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
   
  }

}
