import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

const sharedModules = [
  CommonModule,
  ReactiveFormsModule, 
  HttpClientModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    ...sharedModules
  ],
  exports: [...sharedModules]
})
export class SharedModule { }
