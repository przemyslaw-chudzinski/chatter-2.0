import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {

  @Input() contact: any;
  @Input() online: boolean;

  get hasUnreadMessages(): boolean {
    return this.contact && this.contact.unreadMessagesNumber && this.contact.unreadMessagesNumber > 0;
  }
}
