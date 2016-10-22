import {NgModule}     from '@angular/core';
import {RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UserProfileComponent}    from './user-profile.component';
import {ReposComponent} from "../repos/repos.component";
import {FollowersComponent} from "../followers/followers.component";
import {FollowingComponent} from "../following/following.component";
import {UserPofileResolve} from "./user-profile.resolve";

@NgModule({
  imports: [

    RouterModule.forChild([

      {
        path: 'user/:userid',
        component: UserProfileComponent,
        resolve: {
          userProfile: UserPofileResolve
        },
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

      // {
      //   path: '',
      //   component: ReposComponent
      // },
      // {
      //   path: 'repos',
      //   component: ReposComponent
      // },
      // {
      //   path: 'following',
      //   component: FollowingComponent
      // },
      // {
      //   path: 'followers',
      //   component: FollowersComponent
      // },
    ])
  ],
  providers: [
    UserPofileResolve
  ],
  exports: [
    RouterModule
  ]
})
export class UserProfileRoutingModule {
}
