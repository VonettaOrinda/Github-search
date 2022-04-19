import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile!: any;
  repos!: any[];
  username!: string;
  findProfileprofileService: any;

  constructor(private profileService: ProfileService) { 

  }

  findProfile(){
  	
  	this.profileService.getProfileInfo().subscribe((profile : any)  => {
  		console.log(profile);
  		this.profile = profile;
  	});

  	this.findProfileprofileService.getProfileRepos().subscribe((repos: any) => {
  		console.log(repos);
  		this.repos = repos;
  	})  	
  }

  ngOnInit() {
  }

}


//   export class ProfileComponent implements OnInit {
//   [x: string]: any;
//     profile!: any;
//     repos!: any;
//     username!: string;

//   constructor(private ProfileService:ProfileService) { 
    // this.ProfileService.getProfileInfo().subscribe((profile: any) =>{ 
    //   console.log(profile);
    //   this.profile=profile;
//     });
//     this['profileService'].getProfileRepos().subscribe((repos: any) => {
//       console.log(repos);
//       this.repos=repos;
//   }
  
// }

//  ngOnInit(): void {
  
// }