import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactCardComponent } from './contact-card/contact-card.component';

@NgModule({
  declarations: [ContactsListComponent, ContactCardComponent],
  imports: [
    CommonModule
  ],
  exports: [ContactsListComponent, ContactCardComponent]
})
export class ContactsModule { }
