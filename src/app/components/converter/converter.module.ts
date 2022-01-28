import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterComponent } from './converter.component';
import { DisplayComponent } from './display/display.component';
import { SharedModule } from 'src/app/shared/shared.module';


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
