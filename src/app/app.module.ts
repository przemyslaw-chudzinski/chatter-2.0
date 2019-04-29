import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '../environments/environment';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: 'src/app/pages/home-pages/home-pages.module#HomePagesModule',
  },
  {
    path: 'chat',
    loadChildren: 'src/app/pages/chat-pages/chat-pages.module#ChatPagesModule'
  },
  {
    path: 'tests',
    loadChildren: 'src/app/pages/test-pages/test-pages.module#TestPagesModule'
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
].filter(route => route.path === 'tests' && !environment.production);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
