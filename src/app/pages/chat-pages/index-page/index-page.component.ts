import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent {

  @Input() contactFilters: any[] = [
    {
      id: 1,
      text: 'All'
    },
    {
      id: 2,
      text: 'Teams'
    },
    {
      id: 3,
      text: 'Personal'
    }
  ];

  @Input() contactLists: any[] = [
    {
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
      unreadMessagesNumber: 0
    },
    {
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
      unreadMessagesNumber: 1
    },
    {
      id: 1,
      name: 'John Doe',
      avatar: {
        url: 'https://randomuser.me/api/portraits/women/84.jpg'
      },
      lastMessage: {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        readAt: null
      },
      unreadMessagesNumber: 1
    },
    {
      id: 1,
      name: 'John Doe',
      avatar: {
        url: 'https://randomuser.me/api/portraits/women/84.jpg'
      },
      lastMessage: {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        readAt: null
      },
      unreadMessagesNumber: 1
    },
    {
      id: 1,
      name: 'John Doe',
      avatar: {
        url: 'https://randomuser.me/api/portraits/women/84.jpg'
      },
      lastMessage: {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        readAt: null
      },
      unreadMessagesNumber: 1
    },
    {
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
      unreadMessagesNumber: 1
    },
    {
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
      unreadMessagesNumber: 1
    },
    {
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
      unreadMessagesNumber: 1
    },
    {
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
      unreadMessagesNumber: 1
    },

  ];

  activeFilter = 1;

}
