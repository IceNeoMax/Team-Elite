import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../providers/data';
import { TeamDetailPage } from '../team-detail/team-detail';


/*
  Generated class for the TourDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tour-detail',
  templateUrl: 'tour-detail.html',
})
export class TourDetailPage {


  tour: any={};

  teamsNum: number [];
  teamsInvolve: any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public data:Data) {
    
  }

  ionViewDidLoad() {
    let tour = this.navParams.get('tour');
    if(typeof(tour) !== "undefined"){
			this.tour = tour;
      this.teamsNum = tour.Teams.split(",").map(item=> parseInt(item, 10) );
		}

    this.teamsNum.forEach(element => {
      this.data.getTeam(element).then(data  =>  {this.teamsInvolve.push(data);
        });
      
    });    
    console.log(this.tour);
  }
   intoTeamDetail(team){
    this.navCtrl.push(TeamDetailPage,{team:team});
  }

}
