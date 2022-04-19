import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { HttpClientModule} from '@angular/common/http';
// import {AlertModules} from 'ngx-bootstrap'

@NgModule({ 
  declarations: [
    AppComponent,
    ProfileComponent,
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // AlertModules: any
}
