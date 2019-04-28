import { NgModule } from '@angular/core';
import {BadgeModule} from './badge/badge.module';
import {InputModule} from './input/input.module';

@NgModule({
  exports: [BadgeModule, InputModule]
})
export class UiModule { }
