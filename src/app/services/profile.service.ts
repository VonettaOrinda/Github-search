import { Injectable } from '@angular/core';
import { HttpClient,} from'@angular/common/http';
import  {map } from 'rxjs/operators';
import { pipe } from 'rxjs/internal/util/pipe';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid: 'f49e0f06935c40d04bfc' = "f49e0f06935c40d04bfc";
  private clientsecret: 'ad7c0aaf0d186710fefb889fed99fb6a9b5abc8d' = "ad7c0aaf0d186710fefb889fed99fb6a9b5abc8d"; 
  HttpClient: any;
  
  
  constructor(private http:HttpClient) {
    console.log('service is now ready!');
    this.username='Vonettaorinda';
    

   }
   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	// .pipe(map(res => res.json());
    
     
   }
}
