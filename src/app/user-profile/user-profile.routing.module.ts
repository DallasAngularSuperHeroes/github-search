import {NgModule}     from '@angular/core';
import {RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UserProfileComponent}    from './user-profile.component';
import {ReposComponent} from "../repos/repos.component";
import {FollowersComponent} from "../followers/followers.component";
import {FollowingComponent} from "../following/following.component";
import {UserProfileResolve} from "./user-profile.resolve";
import {UserProfile} from "../shared/userProfile";

@NgModule({
  imports: [

    RouterModule.forChild([

      {
        path: 'user/:userid',
        component: UserProfileComponent,
        resolve: {
          userProfile: UserProfileResolve,
        },
        // canActivate: [UserProfileResolve],
        canActivate: ['noAname'],
        children: [
          {
            path: '',
            redirectTo: 'repos',
            pathMatch: 'full'
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
    UserProfileResolve,
    {
      provide: 'noAname',
      useValue: (route:ActivatedRouteSnapshot):Promise<UserProfile>|boolean => {
        return !route.params['userid'].startsWith('a');
      }
    },
  ],
  exports: [
    RouterModule
  ]
})
export class UserProfileRoutingModule {
}
