import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../providers/data';
import { TeamDetailPage } from '../team-detail/team-detail';

/*
  Generated class for the Tab2Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab2-teams',
  templateUrl: 'tab2-teams.html',
  animations: [
   trigger('bounceInBottom', [
      state('in', style({
        transform: 'rotate(360deg)'
      })),
      transition('void => *', animate('1400ms ease'))
    ])
  ]

})
export class Tab2TeamsPage {
  
  teams: any;
  teamsState : string = "in";
  constructor(public navCtrl: NavController, public dataService: Data) {}

  ionViewDidLoad() {
    this.dataService.getTeams().then(data  => {this.teams= data;});
    this.dataService.getFollows();

  }

   intoTeamDetail(team){
    this.navCtrl.push(TeamDetailPage,{team:team,follow:this.dataService.follows[team.id-1]});
  }
}
