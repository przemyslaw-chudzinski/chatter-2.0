import {Component, Inject, Input} from '@angular/core';
import {ICON_DEFINITION_TOKEN} from './icon-definitions/icon-definition-token';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input() iconName: string = null;

  constructor(@Inject(ICON_DEFINITION_TOKEN) private iconDefinition: any) {}

  get iconCssClass(): string {
    return this.iconDefinition.iconFactory(this.iconName).cssClass;
  }

  get iconValue(): string {
    return this.iconDefinition.iconFactory(this.iconName).value;
  }

}
