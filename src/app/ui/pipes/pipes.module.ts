import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliceWordsPipe } from './slice-words.pipe';
import { SliceCharsPipe } from './slice-chars.pipe';

@NgModule({
  declarations: [SliceWordsPipe, SliceCharsPipe],
  imports: [
    CommonModule
  ],
  exports: [SliceWordsPipe, SliceCharsPipe]
})
export class PipesModule { }
