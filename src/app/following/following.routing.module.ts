import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

import {FollowingComponent}    from './following.component';
import {FollowingResolve} from "./following.resolve";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'following',
        outlet: 'following',
        component: FollowingComponent,
        resolve: {
          following: FollowingResolve
        }
      }
    ])
  ],
  providers: [
    FollowingResolve
  ],
  exports: [
    RouterModule
  ]
})
export class FollowingRoutingModule {
}
