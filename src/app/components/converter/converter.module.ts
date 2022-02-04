import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter.component';
import { DisplayComponent } from './display/display.component';
import { ConverterRoutingModule } from './converter-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';
@NgModule({
  declarations: [
    ConverterComponent,
    DisplayComponent,
    CurrencySelectorComponent
  ],
  imports: [
    CommonModule,
    ConverterRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ConverterModule { }
