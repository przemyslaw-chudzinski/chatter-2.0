import {AsIconDefinition} from './as-icon-definition.interface';
import {IconDefinition} from './icon-definition.model';

export class MaterialIconsDefinition implements AsIconDefinition {
  iconFactory(iconName: string): IconDefinition {
    return {
      cssClass: 'material-icons',
      value: iconName,
      node: 'i'
    };
  }
}
