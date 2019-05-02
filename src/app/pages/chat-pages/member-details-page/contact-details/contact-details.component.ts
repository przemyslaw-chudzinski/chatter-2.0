import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {

  contactInfo: any[] = [
    {
     id: 1,
     key: 'Email',
     value: 'przemyslaw-chudzinski@wp.pl'
    },
    {
      id: 1,
      key: 'Tel',
      value: ['+48 123 123 123', '+87 213 123 123']
    }
  ];

  isArray(value: any): boolean {
    return value instanceof Array;
  }

}
