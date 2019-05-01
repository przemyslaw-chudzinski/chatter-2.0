import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPagesComponent } from './chat-pages.component';
import { IndexPageComponent } from './index-page/index-page.component';
import {RouterModule, Routes} from '@angular/router';
import {ContactsModule} from '../../contacts/contacts.module';
import {UiModule} from '../../ui/ui.module';

const routes: Routes = [
  {
    path: '',
    component: ChatPagesComponent,
    children: [
      {
        path: ':contactId'
      },
      {
        path: '',
        component: IndexPageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ChatPagesComponent, IndexPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ContactsModule,
    UiModule
  ]
})
export class ChatPagesModule { }
