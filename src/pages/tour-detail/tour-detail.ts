import { Component, trigger, state, style, transition, animate,keyframes } from '@angular/core';
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
  animations: [
   trigger('zoomInUp', [
      state('in', style({
        transform: 'rotate(360deg)'
      })),
      transition('void => *', [animate('1400ms ease-in',keyframes([
        style({transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)', offset: 0}), 
         style({transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', offset: 0.4}) ,
          style({transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', offset: 0.5}),
          style({transform: 'perspective(400px) scale3d(.95, .95, .95)', offset: 0.8}),
          style( {transform: 'perspective(400px)', offset: 1})
      ]))
      ])
    ])
  ]
})
export class TourDetailPage {

  teamsState : string = "in";
  tour: any={};
  teamsNum: number [];
  teamsInvolve: any =[];
  dota2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data:Data) {
    this.dota2 = "Description";
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
