import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPagesComponent } from './chat-pages.component';
import { IndexPageComponent } from './index-page/index-page.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  }
];

@NgModule({
  declarations: [ChatPagesComponent, IndexPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChatPagesModule { }
