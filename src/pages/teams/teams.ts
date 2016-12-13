import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Data } from '../providers/data';
import { TeamDetailPage } from '../team-detail/team-detail';

/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
  animations: [
   trigger('bounceInBottom', [
      state('in', style({
        transform: 'rotate(360deg)'
      })),
      transition('void => *', animate('1400ms ease'))
    ])
  ]
})
export class TeamsPage {

  teams: any;
  tempteams:any;
  teamsState : string = "in";

  constructor(public navCtrl: NavController, public dataService:Data, private loadingCtrl:LoadingController) {
    
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content:'Getting Teams...',
      spinner:'bubbles'
    });
    loader.present().then(()=>{
       this.dataService.getTeams().then(data=> {this.teams= data;this.tempteams=this.teams});
      this.dataService.getFollows();
      console.log( this.dataService.follows);
      loader.dismiss();
    })
   
  }

  intoTeamDetail(team){
    this.navCtrl.push(TeamDetailPage,{team:team,follow:this.dataService.follows[team.id-1]});
  }

  getTeams(ev){
    this.teams= this.tempteams;
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.teams = this.teams.filter((item) => {
        return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  changeFollow(id){
    this.dataService.changeFollow(id);
  }

}
