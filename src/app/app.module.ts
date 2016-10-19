import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from './main.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { UserProfileModule } from './user-profile/user-profile.module';
import { GithubsearchService } from './githubsearch.service';
import {ReposModule} from "./repos/repos.module";
import {FollowingModule} from "./following/following.module";
import {FollowersModule} from "./followers/followers.module";
import {WelcomeModule} from "./welcome/welcome.module";

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    UserProfileModule,
    ReposModule,
    FollowingModule,
    FollowersModule,
    WelcomeModule,
  ],
  providers: [GithubsearchService],
  bootstrap: [MainComponent]
})
export class AppModule { }
