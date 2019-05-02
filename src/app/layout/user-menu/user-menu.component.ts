import {Component, Input} from '@angular/core';
import {DropdownComponent} from '../../ui/dropdown/dropdown/dropdown.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {

  @Input() dropdownRef: DropdownComponent;

  menuItems: any[] = [
    {
      id: 1,
      route: '/account-settings',
      iconName: 'account_circle',
      label: 'Profile',
      theme: 'primary'
    },
    {
      id: 2,
      route: '/account-settings',
      iconName: 'settings',
      label: 'Account settings',
      theme: 'primary'
    }
  ];

}
