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
      title: 'My page',
      subtitle: 'This is awesome page!',
      route: '',
      badges: [
        {
          description: '',
          value: 12
        }
      ]
    },
    {
      id: 2,
      icon: 'envelope',
      title: 'Chat',
      route: '',
      active: true,
      badges: [
        {
          description: '',
          value: 12
        }
      ]
    },
    {
      id: 3,
      icon: 'envelope',
      title: 'Settings',
      subtitle: 'Change advanced elements',
      route: '',
      badges: [
        {
          description: '',
          value: 12
        }
      ]
    },
    {
      id: 4,
      icon: 'edit',
      title: 'Community',
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
    }
  ];


}
