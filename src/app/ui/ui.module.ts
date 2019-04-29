import { NgModule } from '@angular/core';
import {BadgeModule} from './badge/badge.module';
import {InputModule} from './input/input.module';
import {IconModule} from './icon/icon.module';
import {TabsModule} from './tabs/tabs.module';
import {AvatarModule} from './avatar/avatar.module';
import {PipesModule} from './pipes/pipes.module';

@NgModule({
  exports: [BadgeModule, InputModule, IconModule, TabsModule, AvatarModule, PipesModule]
})
export class UiModule { }
