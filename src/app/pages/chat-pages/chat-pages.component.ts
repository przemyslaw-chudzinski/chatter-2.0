import {Component} from '@angular/core';

@Component({
  selector: 'app-chat-pages',
  templateUrl: './chat-pages.component.html',
  styleUrls: ['./chat-pages.component.scss']
})
export class ChatPagesComponent {

  contactFilters: any[] = [
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

  contactLists: any[] = [
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
      unreadMessagesNumber: 0,
      type: 'user'
    },
    {
      id: 1,
      name: 'Angular Development',
      avatar: {
        url: 'https://randomuser.me/api/portraits/women/84.jpg'
      },
      lastMessage: {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        readAt: new Date()
      },
      unreadMessagesNumber: 1,
      type: 'team'
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
      name: 'VueJs Team Development',
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
      lastMessage: null,
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
      unreadMessagesNumber: 0
    },

  ].map(item => ({...item, online: Math.random() >= .5}));

  activeFilter = 1;
}
