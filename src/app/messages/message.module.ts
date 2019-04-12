import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'tweets',
        component: MessageComponent,
        outlet: 'twitter'
      }
    ])
  ],
  declarations: [
    MessageComponent
  ]
})

//TODO: turn this into twitter module and link to twitter API for my feed
export class MessageModule { }