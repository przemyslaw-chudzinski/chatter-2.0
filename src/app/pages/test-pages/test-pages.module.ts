import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPagesComponent } from './test-pages.component';
import { IndexPageComponent } from './index-page/index-page.component';
import {RouterModule, Routes} from '@angular/router';
import {UiModule} from '../../ui/ui.module';
import { TabsTestPageComponent } from './tabs-test-page/tabs-test-page.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsTestPageComponent
  },
  {
    path: '',
    component: IndexPageComponent
  },
];

@NgModule({
  declarations: [TestPagesComponent, IndexPageComponent, TabsTestPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule
  ]
})
export class TestPagesModule { }
