import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';
import { Data } from '../providers/data';
import { Tab2TeamsPage } from '../tab2-teams/tab2-teams';
import { Tab1NewsPage } from '../tab1-news/tab1-news';
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  teams: any;

    Tab1NewsPageTab:any;
  Tab2TeamsPageTab: any;
  constructor(public navCtrl: NavController, public dataService:Data) {
    this.Tab1NewsPageTab = Tab1NewsPage;
    this.Tab2TeamsPageTab = Tab2TeamsPage;
  }

  ionViewDidLoad() {
    
  }

  intoTeamDetail(team){
    this.navCtrl.push(TeamDetailPage,{team:team});
  }
}
