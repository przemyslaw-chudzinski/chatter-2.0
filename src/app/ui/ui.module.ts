import { NgModule } from '@angular/core';
import {BadgeModule} from './badge/badge.module';
import {InputModule} from './input/input.module';
import {IconModule} from './icon/icon.module';

@NgModule({
  exports: [BadgeModule, InputModule, IconModule]
})
export class UiModule { }
