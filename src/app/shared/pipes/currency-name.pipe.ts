import { Pipe, PipeTransform } from '@angular/core';
import { SessionStorageKeys } from 'src/app/app.consts';
import { SessionStorageService } from 'src/app/core/session-storage.service';

@Pipe({
  name: 'currencyName',
  pure: true
})
export class CurrencyNamePipe implements PipeTransform {

  constructor(private readonly sessionStorageService: SessionStorageService) {}

  transform(shortName: string): string {
    if (window.innerWidth < 768) return shortName;
    const dictionary = this.sessionStorageService.readItem(SessionStorageKeys.CURRENCY_DICTIONARY) || {};
    return dictionary[shortName] || shortName;
  }

}
