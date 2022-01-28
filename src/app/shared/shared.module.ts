import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from './shared-pipes.module';
import {HttpClientModule} from '@angular/common/http';

const sharedModules = [ReactiveFormsModule, SharedPipesModule, HttpClientModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: [...sharedModules]
})
export class SharedModule { }
