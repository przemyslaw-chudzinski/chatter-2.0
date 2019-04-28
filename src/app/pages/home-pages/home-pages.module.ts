import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePagesComponent} from './home-pages.component';
import {RouterModule, Routes} from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  }
];

@NgModule({
  declarations: [HomePagesComponent, IndexPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePagesModule { }
