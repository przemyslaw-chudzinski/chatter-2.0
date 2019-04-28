import {AsIconDefinition} from './as-icon-definition.interface';
import {IconDefinition} from './icon-definition.model';

export class FontAwesomeIconsDefinition implements AsIconDefinition {

  iconFactory(iconName: string): IconDefinition {
    return {
      cssClass: 'fa fa-' + iconName,
      value: null,
      node: 'span'
    };
  }
}
