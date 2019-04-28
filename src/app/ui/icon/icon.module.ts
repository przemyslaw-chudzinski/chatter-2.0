import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import {ICON_DEFAULT_DEFINITION_PROVIDER} from './icon-definitions/icon-default-definition-provider';

@NgModule({
  declarations: [IconComponent],
  exports: [
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ICON_DEFAULT_DEFINITION_PROVIDER]
})
export class IconModule { }
