import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPagesComponent } from './chat-pages.component';
import { IndexPageComponent } from './index-page/index-page.component';
import {RouterModule, Routes} from '@angular/router';
import {ContactsModule} from '../../contacts/contacts.module';
import {UiModule} from '../../ui/ui.module';
import { MemberDetailsPageComponent } from './member-details-page/member-details-page.component';
import { TeamDetailsPageComponent } from './team-details-page/team-details-page.component';
import { ContactDetailsComponent } from './member-details-page/contact-details/contact-details.component';
import { AttachmentsComponent } from './member-details-page/attachments/attachments.component';
import { SavedMessagesComponent } from './member-details-page/saved-messages/saved-messages.component';

const routes: Routes = [
  {
    path: '',
    component: ChatPagesComponent,
    children: [
      {
        path: 'member/:memberId',
        component: MemberDetailsPageComponent,
        children: [
          {
            path: 'details',
            component: ContactDetailsComponent,
            outlet: 'details'
          },
          {
            path: 'attachments',
            component: AttachmentsComponent,
            outlet: 'details'
          },
          {
            path: 'saved-messages',
            component: SavedMessagesComponent,
            outlet: 'details'
          },
          {
            path: '**',
            component: ContactDetailsComponent,
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'team/:teamId',
        component: TeamDetailsPageComponent
      },
      {
        path: '',
        component: IndexPageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ChatPagesComponent, IndexPageComponent, MemberDetailsPageComponent, TeamDetailsPageComponent, ContactDetailsComponent, AttachmentsComponent, SavedMessagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ContactsModule,
    UiModule
  ]
})
export class ChatPagesModule { }
