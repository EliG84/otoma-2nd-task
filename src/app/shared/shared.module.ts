import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { CurrencyNamePipe } from './pipes/currency-name.pipe';

const classes = [CurrencyNamePipe]

const sharedModules = [
  CommonModule,
  ReactiveFormsModule, 
  HttpClientModule,
  MatTableModule
]

@NgModule({
  declarations: [...classes],
  imports: [
    ...sharedModules
  ],
  exports: [...sharedModules, ...classes]
})
export class SharedModule { }
