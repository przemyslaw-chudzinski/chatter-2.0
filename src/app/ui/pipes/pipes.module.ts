import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliceWordsPipe } from './slice-words.pipe';

@NgModule({
  declarations: [SliceWordsPipe],
  imports: [
    CommonModule
  ],
  exports: [SliceWordsPipe]
})
export class PipesModule { }
