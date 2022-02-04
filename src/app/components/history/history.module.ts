import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.module';
import { MatTableModule } from '@angular/material/table';
import { CurrencyNamePipe } from 'src/app/shared/pipes/currency-name.pipe';
@NgModule({
  declarations: [
    HistoryComponent,
    CurrencyNamePipe
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MatTableModule,
  ]
})
export class HistoryModule { }
