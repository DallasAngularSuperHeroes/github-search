import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ReposComponent }  from './repos.component';

import { ReposRoutingModule } from './repos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReposRoutingModule
  ],
  declarations: [
    ReposComponent
  ],
  providers: [
    
  ]
})
export class ReposModule {}