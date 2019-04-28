import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AsideComponent } from './aside/aside.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import {TopbarModule} from './topbar/topbar.module';
import {UiModule} from '../ui/ui.module';

@NgModule({
  declarations: [LayoutComponent, AsideComponent, MainContentComponent, MenuComponent, MenuItemComponent],
  imports: [
    CommonModule,
    TopbarModule,
    UiModule
  ],
  exports: [LayoutComponent, TopbarModule]
})
export class LayoutModule { }
