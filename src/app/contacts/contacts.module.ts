import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import {UiModule} from '../ui/ui.module';

@NgModule({
  declarations: [ContactsListComponent, ContactCardComponent],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [ContactsListComponent, ContactCardComponent]
})
export class ContactsModule { }
