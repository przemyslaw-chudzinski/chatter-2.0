import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabComponent } from './tab/tab.component';
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { TabNavBarDirective } from './tab-nav-bar.directive';
import { TabLinkDirective } from './tab-link.directive';
import { StretchTabsDirective } from './stretch-tabs.directive';

@NgModule({
  declarations: [TabGroupComponent, TabComponent, TabHeaderComponent, TabNavBarDirective, TabLinkDirective, StretchTabsDirective],
  imports: [
    CommonModule
  ],
  exports: [TabGroupComponent, TabComponent, TabNavBarDirective, TabLinkDirective, StretchTabsDirective],
  providers: []
})
export class TabsModule { }
