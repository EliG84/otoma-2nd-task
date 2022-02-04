import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ICurrenciesResponse } from 'src/app/model/api.model';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: CurrencySelectorComponent,
  }],
})
export class CurrencySelectorComponent implements ControlValueAccessor  {

  value = '';
  disabled = false;
  
  @Input()
  currencies: ICurrenciesResponse | undefined;
  @Input()
  accesabilityName = '';
  @Input()
  label = '';

  onChange: any = (value: string | null) => {}

  onTouch: any = () => {}

  onSelectionChange(event: any): void {
    const value = event.target.value;
    if (!value.length) {
      this.onChange(null);
    } else {
      this.onChange(value);
    }
  }

  registerOnChange(onChange: any): void {
      this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
      this.onTouch = onTouched;
  }

  writeValue(value: any): void {
      this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
