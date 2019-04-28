import {ICON_DEFINITION_TOKEN} from '../app/ui/icon/icon-definitions/icon-definition-token';
import {AsIconDefinition} from '../app/ui/icon/icon-definitions/as-icon-definition.interface';
import {IconDefinition} from '../app/ui/icon/icon-definitions/icon-definition.model';

export class IconDefinitionStumb implements AsIconDefinition {
  iconFactory(iconName: string): IconDefinition {
    return {
      cssClass: 'test ' + iconName,
      value: 'test-' + iconName,
      node: ''
    };
  }
}

export const ICON_DEFINITION_STUMB_PROVIDER = {
  provide: ICON_DEFINITION_TOKEN,
  useClass: IconDefinitionStumb
};
