import { NgModule } from '@angular/core';
import {BadgeModule} from './badge/badge.module';
import {InputModule} from './input/input.module';
import {IconModule} from './icon/icon.module';
import {TabsModule} from './tabs/tabs.module';
import {AvatarModule} from './avatar/avatar.module';
import {PipesModule} from './pipes/pipes.module';
import {DirectivesModule} from './directives/directives.module';
import {CardModule} from './card/card.module';
import {ListModule} from './list/list.module';
import {DropdownModule} from './dropdown/dropdown.module';
import {BackdropModule} from './backdrop/backdrop.module';
import {MenuModule} from './menu/menu.module';

@NgModule({
  exports: [
    BadgeModule,
    InputModule,
    IconModule,
    TabsModule,
    AvatarModule,
    PipesModule,
    DirectivesModule,
    CardModule,
    ListModule,
    DropdownModule,
    BackdropModule,
    MenuModule
  ]
})
export class UiModule { }
