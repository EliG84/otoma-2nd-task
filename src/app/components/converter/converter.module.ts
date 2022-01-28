import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConverterComponent } from './converter.component';
import { DisplayComponent } from './display/display.component';
import { ConverterRoutingModule } from './converter-routing.module';
@NgModule({
  declarations: [
    ConverterComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    ConverterRoutingModule,
    SharedModule
  ]
})
export class ConverterModule { }
