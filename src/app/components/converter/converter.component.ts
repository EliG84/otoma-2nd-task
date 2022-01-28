import { ConverterService } from './converter.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HistoryService } from '../history/history.service';
import { ConvertionResponse } from 'src/app/model/data.model';
import { debounceTime, filter, Observable, switchMap, tap } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConverterComponent implements OnInit {

  currentRate$: Observable<ConvertionResponse> | undefined;
  currencies$ = this.converterService.getCorrencies();
  converterDebounceTime = 1000;

  form = this.fb.group({
    amount: [1,Validators.required],
    from: [null, Validators.required],
    to: [null, Validators.required],
  });

  constructor(private readonly converterService: ConverterService,
              private readonly historyService: HistoryService,
              private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.subToFormChanges();
  }

  subToFormChanges(): void {
   this.currentRate$ = this.form.valueChanges.pipe(
      debounceTime(this.converterDebounceTime),
      filter(() => this.form.valid),
      filter(() => this.form.value['amount'] > 0),
      filter(() => this.form.value['from'] !== this.form.value['to']),
      switchMap(() => this.converterService.getConvertionRate(this.form.getRawValue())),
      tap((converted) => this.historyService.addHistory(converted)),
    );
  }

}
