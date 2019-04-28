import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { InputDirective } from './input.directive';
import {IconModule} from '../icon/icon.module';

@NgModule({
  declarations: [InputComponent, InputDirective],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [InputComponent, InputDirective]
})
export class InputModule { }
