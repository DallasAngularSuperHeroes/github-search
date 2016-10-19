import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { UserProfileComponent }  from './user-profile.component';

import { UserProfileRoutingModule } from './user-profile.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserProfileRoutingModule
  ],
  declarations: [
    UserProfileComponent
  ],
  providers: [
    
  ]
})
export class UserProfileModule {}