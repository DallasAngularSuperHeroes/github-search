import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { FollowersComponent }  from './followers.component';

import { FollowersRoutingModule } from './followers.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FollowersRoutingModule
  ],
  declarations: [
    FollowersComponent
  ],
  providers: [
    
  ]
})
export class FollowersModule {}