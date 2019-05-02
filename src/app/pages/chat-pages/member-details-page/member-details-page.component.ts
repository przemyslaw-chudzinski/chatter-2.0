import { Component } from '@angular/core';

@Component({
  selector: 'app-member-details-page',
  templateUrl: './member-details-page.component.html',
  styleUrls: ['./member-details-page.component.scss']
})
export class MemberDetailsPageComponent {

  member: any = {
    id: 1,
    name: 'John Doe',
    avatar: {
      url: 'https://randomuser.me/api/portraits/women/84.jpg'
    },
    lastMessage: {
      id: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      readAt: new Date()
    },
    unreadMessagesNumber: 0,
    type: 'user',
    city: 'Cracow',
    country: 'Poland',
  };

  memberInfo: any[] = [

  ];

  chatExtraRoutes: any[] = [
    {
      id: 1,
      text: 'Contact Details',
      route: 'details'
    },
    {
      id: 2,
      text: 'Shared Files',
      route: 'attachments'
    },
    {
      id: 3,
      text: 'Saved Messages',
      route: 'saved-messages'
    }
  ];
}
