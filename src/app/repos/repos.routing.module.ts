import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReposComponent }    from './repos.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'repos',
        outlet: 'repos',
        component: ReposComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ReposRoutingModule { }
