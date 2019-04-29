import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPagesComponent } from './test-pages.component';
import { IndexPageComponent } from './index-page/index-page.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  }
];

@NgModule({
  declarations: [TestPagesComponent, IndexPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TestPagesModule { }
