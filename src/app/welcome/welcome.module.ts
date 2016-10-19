import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { WelcomeComponent }  from './welcome.component';

import { WelcomeRoutingModule } from './welcome.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WelcomeRoutingModule
  ],
  declarations: [
    WelcomeComponent
  ],
  providers: [
    
  ]
})
export class WelcomeModule {}