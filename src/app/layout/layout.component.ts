import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  asideMenuItems: any[] = [
    {
      id: 1,
      icon: 'home',
      title: 'Dashboard',
      subtitle: null,
      route: '/dashboard',
      badges: []
    },
    {
      id: 2,
      icon: 'comments',
      title: 'Chat',
      subtitle: 'Talk with your team',
      route: '/chat',
      badges: [
        {
          description: '',
          value: 12
        }
      ]
    },
    {
      id: 3,
      icon: 'settings',
      title: 'Settings',
      subtitle: 'Change advanced elements',
      route: '/settings',
      badges: [
        {
          description: '',
          value: 12
        }
      ]
    },
    {
      id: 4,
      icon: 'done',
      title: 'Community',
      route: '/community',
      badges: [
        {
          description: '',
          value: 12
        },
        {
          description: '',
          value: 3,
          color: 'primary'
        }
      ]
    },
    {
      id: 4,
      icon: 'build',
      title: 'Tests',
      subtitle: 'Only for tests',
      route: '/tests',
      badges: []
    }
  ];


}
