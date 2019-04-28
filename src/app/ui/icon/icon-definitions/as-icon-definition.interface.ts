import {IconDefinition} from './icon-definition.model';

export interface AsIconDefinition {
  iconFactory(iconName: string): IconDefinition;
}
