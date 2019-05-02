import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card/contact-card.component';
import {UiModule} from '../ui/ui.module';

@NgModule({
  declarations: [ContactCardComponent],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [ContactCardComponent]
})
export class ContactsModule { }
