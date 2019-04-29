import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeProviderDirective } from './theme-provider.directive';

@NgModule({
  declarations: [ThemeProviderDirective],
  imports: [
    CommonModule
  ],
  exports: [ThemeProviderDirective]
})
export class DirectivesModule { }
