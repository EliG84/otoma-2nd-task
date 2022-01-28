import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from './shared-pipes.module';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

const sharedModules = [
  CommonModule,
  ReactiveFormsModule, 
  SharedPipesModule, 
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
