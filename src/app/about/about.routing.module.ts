import { NgModule }     from '@angular/core';
import {RouterModule, Route} from '@angular/router';

import { AboutComponent }    from './about.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: AboutComponent,
      },
    ])
  ],
  providers: [
    // {
    //   provide: 'canLoadGuard',
    //   useValue: (route: Route): boolean => { return false; }
    // }
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule { }
