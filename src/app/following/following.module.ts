import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { FollowingComponent }  from './following.component';

import { FollowingRoutingModule } from './following.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FollowingRoutingModule
  ],
  declarations: [
    FollowingComponent
  ],
  providers: [
    
  ]
})
export class FollowingModule {}