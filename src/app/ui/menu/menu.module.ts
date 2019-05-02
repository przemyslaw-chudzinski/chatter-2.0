import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownMenuItemDirective } from './dropdown-menu-item.directive';

@NgModule({
  declarations: [DropdownMenuDirective, DropdownMenuItemDirective],
  imports: [
    CommonModule
  ],
  exports: [DropdownMenuDirective, DropdownMenuItemDirective]
})
export class MenuModule { }
