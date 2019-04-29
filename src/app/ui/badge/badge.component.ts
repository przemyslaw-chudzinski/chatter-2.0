import {Component, HostBinding, Input} from '@angular/core';
import {ThemeColor} from '../types/theme-color.types';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {

  @Input() value: number = null;
  @Input() color: ThemeColor = 'secondary';

  @HostBinding('class')
  get cssClasses() {
    switch (this.color) {
      case 'primary': return 'theme-primary';
      case 'secondary': return 'theme-secondary';
      default: return 'theme-secondary';
    }
  }

}
