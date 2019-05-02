import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { WithBorderBottomDirective } from './with-border-bottom.directive';

@NgModule({
  declarations: [ListComponent, ListItemComponent, WithBorderBottomDirective],
  exports: [
    ListComponent,
    ListItemComponent,
    WithBorderBottomDirective
  ],
  imports: [
    CommonModule
  ],
})
export class ListModule { }
