import {NgModule}     from '@angular/core';
import {RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UserProfileComponent}    from './user-profile.component';
import {ReposComponent} from "../repos/repos.component";
import {FollowersComponent} from "../followers/followers.component";
import {FollowingComponent} from "../following/following.component";
import {UserProfileResolve} from "./user-profile.resolve";

@NgModule({
  imports: [

    RouterModule.forChild([

      {
        path: 'user/:userid',
        component: UserProfileComponent,
        resolve: {
          userProfile: UserProfileResolve,
        },
        canActivate: [UserProfileResolve],
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
  providers: [
    UserProfileResolve
  ],
  exports: [
    RouterModule
  ]
})
export class UserProfileRoutingModule {
}
