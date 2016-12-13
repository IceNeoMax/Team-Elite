import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
@Injectable()
export class Data {

	follows: any = [];
	private baseUrl = "https://team-elite-d8aa1.firebaseio.com/";
	constructor(public http: Http, public storage: Storage) {
	}
	getTeams(){
		return new Promise(resolve=>{
			this.http.get(`${this.baseUrl}/Teams.json`)
			.subscribe(res=> resolve(res.json()));
		});
	}
	getTeam(id){
		return new Promise(resolve=>{
			this.http.get(`${this.baseUrl}/Teams/`+(id-1)+'.json')
			.subscribe(res=> resolve(res.json()));
		});
	}
	getTournaments(){
		return new Promise(resolve=>{
			this.http.get(`${this.baseUrl}/Locations.json`)
			.subscribe(res=> resolve(res.json()));
		});
	}


	getFollows(){
		
		// this.storage.get('follows').then(res=> 
		// 	{
		// 		this.follows= res;
		// 		if(this.follows.length > 0){
		// 			console.log( this.follows);
		// 			return this.follows;
		// 		} 
		// 		else if(this.follows.length == 0) {
		// 			this.storage.set('follows',[false,false,false,false,false,false,false,false,false,false]);
		// 			 this.storage.get('follows').then(res=> {this.follows= res; return this.follows;});
					 
		// 		}
		// 	});	
		return new Promise(resolve => {

			if(this.follows.length > 0){

				resolve(this.follows);

			} else {

				this.storage.get('follows').then((follows) => {

					if(follows && typeof(follows) != "undefined"){
						this.follows = follows;
					}

					resolve(this.follows)

				});

			}

		});
	}

	// saveFollows(follow){
	// 	this.storage.set('follows',this.follows);
	// }
	changeFollow(id){
    this.follows[id]=!this.follows[id];
	this.storage.set('follows',this.follows);
    //this.dataService.saveFollows(this.dataService.follows);
  }
	

}

