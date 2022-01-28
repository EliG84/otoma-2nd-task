import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime, filter, Observable, switchMap, tap } from 'rxjs';
import { ConvertionResponse } from 'src/app/model/data.model';
import { HistoryService } from '../history/history.service';
import { ConverterService } from './converter.service';

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
    amount: [1,[Validators.required]],
    from: [null, Validators.required],
    to: [null, Validators.required],
  })

  constructor(private readonly converterService: ConverterService,
              private readonly historyService: HistoryService,
              private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.subToFormChanges();
  }

  subToFormChanges(): void {
   this.currentRate$ = this.form.valueChanges.pipe(
      debounceTime(this.converterDebounceTime),
      filter(() => this.form.valid && (this.form.value['amount'] > 0)),
      switchMap(() => this.converterService.getConvertionRate(this.form.getRawValue())),
      tap((converted) => this.historyService.addHistory(converted)),
    )
  }

}
