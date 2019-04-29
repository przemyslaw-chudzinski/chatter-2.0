import {Component, HostBinding, Inject, Input} from '@angular/core';
import {ICON_DEFINITION_TOKEN} from './icon-definitions/icon-definition-token';
import {ThemeColor} from '../types/theme-color.types';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input() iconName: string = null;
  @Input() color: ThemeColor = null;

  @HostBinding('class')
  get cssClasses() {
    switch (this.color) {
      case 'primary': return 'theme-primary';
      case 'secondary': return 'theme-secondary';
    }
  }

  constructor(@Inject(ICON_DEFINITION_TOKEN) private iconDefinition: any) {}

  get iconCssClass(): string {
    return this.iconDefinition.iconFactory(this.iconName).cssClass;
  }

  get iconValue(): string {
    return this.iconDefinition.iconFactory(this.iconName).value;
  }

}
