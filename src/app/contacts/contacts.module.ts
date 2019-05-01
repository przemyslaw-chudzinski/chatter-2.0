import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import {UiModule} from '../ui/ui.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  declarations: [ContactsListComponent, ContactCardComponent, ContactDetailsComponent],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [ContactsListComponent, ContactCardComponent, ContactDetailsComponent]
})
export class ContactsModule { }
