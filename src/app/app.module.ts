import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TournamentPage } from '../pages/tournament/tournament';
import { HomePage } from '../pages/home/home';
import { TeamsPage } from '../pages/teams/teams';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TourDetailPage } from '../pages/tour-detail/tour-detail';
import { Data } from '../pages/providers/data';
import { Tab2TeamsPage } from '../pages/tab2-teams/tab2-teams';
import { Tab1NewsPage } from '../pages/tab1-news/tab1-news';
import { Storage } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    TournamentPage,
    HomePage,
    TeamsPage,
    TeamDetailPage,
    TourDetailPage,
    Tab1NewsPage,
    Tab2TeamsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   TournamentPage,
   HomePage,
   TeamsPage,
   TeamDetailPage,
    TourDetailPage,
    Tab1NewsPage,
    Tab2TeamsPage
  ],
  providers: [Data,Storage,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
