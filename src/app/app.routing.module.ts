import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {ReposComponent} from "./repos/repos.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {FollowingComponent} from "./following/following.component";
import {FollowersComponent} from "./followers/followers.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
      },
      {
        path: 'user/:userid',
        component: UserProfileComponent,
        children: [
          {
            path: '',
            component: ReposComponent
          },
          {
            path: 'repos',
            component: ReposComponent
          },
          {
            path: 'following',
            component: FollowingComponent
          },
          {
            path: 'followers',
            component: FollowersComponent
          },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule {}

