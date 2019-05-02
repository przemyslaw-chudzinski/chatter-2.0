import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownTriggerForDirective } from './dropdown-trigger-for.directive';
import {BackdropModule} from '../backdrop/backdrop.module';

@NgModule({
  declarations: [DropdownComponent, DropdownTriggerForDirective],
  imports: [
    CommonModule,
    BackdropModule
  ],
  exports: [DropdownComponent, DropdownTriggerForDirective]
})
export class DropdownModule { }
