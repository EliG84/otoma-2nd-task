import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter.component';
import { DisplayComponent } from './display/display.component';
import { ConverterRoutingModule } from './converter-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ConverterComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    ConverterRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ConverterModule { }
