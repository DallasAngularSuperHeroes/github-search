import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

import {UserProfileComponent}    from './user-profile.component';
import {ReposComponent} from "../repos/repos.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      // {
      //   path: 'user/:userid',
      //   children: [
      //     {
      //       path: '',
      //       component: UserProfileComponent
      //     },
      //     {
      //       path: '',
      //       outlet: 'details',
      //       component: ReposComponent
      //     },
      //   ]
      // }
])
],
exports: [
  RouterModule
]
})
export class UserProfileRoutingModule {
}
