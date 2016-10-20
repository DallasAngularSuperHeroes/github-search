import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";
import {WelcomeComponent} from "../welcome/welcome.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path:'',
            component: WelcomeComponent,
          }
        ]
      },
      // {
      // path: 'user/:userid',
      // component: UserProfileComponent,
      // children: [
      //   {
      //     path: '',
      //     component: ReposComponent
      //   },
      //   {
      //     path: 'repos',
      //     component: ReposComponent
      //   },
      //   {
      //     path: 'following',
      //     component: FollowingComponent
      //   },
      //   {
      //     path: 'followers',
      //     component: FollowersComponent
      //   },
      // ]
      // }
    ])
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule {
}

