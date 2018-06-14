import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule, // we use ngFor
    LayoutsModule
  ],
  exports: [
  ],
  declarations: [
  ],
  providers: []
})
export class CoreModule { }
