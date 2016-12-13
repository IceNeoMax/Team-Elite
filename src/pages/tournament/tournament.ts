import { Component } from '@angular/core';

import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TourDetailPage } from '../tour-detail/tour-detail';
import { Data } from '../providers/data';

@Component({
  selector: 'tournament',
  templateUrl: 'tournament.html'
})
export class TournamentPage {
 
  tours:any;
  
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
