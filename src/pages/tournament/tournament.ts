import { Component, trigger, state, style, transition, animate,keyframes } from '@angular/core';

import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TourDetailPage } from '../tour-detail/tour-detail';
import { Data } from '../providers/data';

@Component({
  selector: 'tournament',
  templateUrl: 'tournament.html',
  animations: [
   trigger('zoomInUp', [
      state('in', style({
        transform: 'rotate(360deg)'
      })),
      transition('void => *', [animate('1400ms ease',keyframes([
        style({transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', opacity: '0',  offset: 0}), 
         style({transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', opacity: '1', offset: 0.6}) ,
          style({transform: 'none', opacity: '1', offset: 1})
      ]))
      ])
    ])
  ]
})
export class TournamentPage {
 
  tours:any;
  teamsState : string = "in";

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService:Data, private loadingCtrl: LoadingController) {
   
  }
  
   ionViewDidLoad() {
     let loader = this.loadingCtrl.create({
      content:'Getting Tournaments...',
      spinner:'bubbles'
    });
    loader.present().then(()=>{
        this.dataService.getTournaments().then(data=> this.tours= data);
        loader.dismiss();
    });

  }

  intoTourDetail(tour){
    this.navCtrl.push(TourDetailPage,{tour:tour});
  } 
}
