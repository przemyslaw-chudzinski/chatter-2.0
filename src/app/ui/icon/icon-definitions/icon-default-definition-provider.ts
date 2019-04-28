import {ICON_DEFINITION_TOKEN} from './icon-definition-token';
import {MaterialIconsDefinition} from './material-icons-definition';

export const ICON_DEFAULT_DEFINITION_PROVIDER = {
  provide: ICON_DEFINITION_TOKEN,
  useClass: MaterialIconsDefinition
};
