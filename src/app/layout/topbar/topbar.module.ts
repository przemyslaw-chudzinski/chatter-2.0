import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopbarComponent} from './topbar.component';
import { TopbarSectionComponent } from './topbar-section/topbar-section.component';

@NgModule({
  declarations: [TopbarComponent, TopbarSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [TopbarComponent, TopbarSectionComponent]
})
export class TopbarModule { }
