import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {AboutGuard} from "./about.guards";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path:'',
            component: WelcomeComponent,
          },
        ]
      },
      { path: 'about',
        loadChildren: './about/about.module#AboutModule',
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
  providers:[
    AboutGuard,
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule {
}

