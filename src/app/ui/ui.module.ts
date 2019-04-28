import { NgModule } from '@angular/core';
import {BadgeModule} from './badge/badge.module';
import {InputModule} from './input/input.module';
import {IconModule} from './icon/icon.module';
import {TabsModule} from './tabs/tabs.module';

@NgModule({
  exports: [BadgeModule, InputModule, IconModule, TabsModule]
})
export class UiModule { }
