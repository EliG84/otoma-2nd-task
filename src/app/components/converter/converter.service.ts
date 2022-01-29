import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { SessionStorageKeys } from 'src/app/app.consts';
import { HttpService } from 'src/app/core/http.service';
import { SessionStorageService } from 'src/app/core/session-storage.service';
import { apiRoutes, ICurrenciesResponse } from 'src/app/model/api.model';
import { ConvertionResponse, CurrenciesResponse, IConverterForm } from 'src/app/model/data.model';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  constructor(private readonly httpService: HttpService,
              private readonly sessionStorage: SessionStorageService) { }

  getCorrencies(): Observable<CurrenciesResponse[]> {
    const fromSession = this.sessionStorage.readItem(SessionStorageKeys.CORRENCIES);
    if (fromSession) return of(fromSession);
    return this.httpService.get(apiRoutes.CURRENCIES).pipe(
      map((data) => {
        this.sessionStorage.setItem(SessionStorageKeys.CURRENCY_DICTIONARY, data || {});
        return this.mapObjectToArray(data || {});
      }),
      tap((data) => this.sessionStorage.setItem(SessionStorageKeys.CORRENCIES, data))
    );
  }

  getConvertionRate(request: IConverterForm): Observable<ConvertionResponse> {
    const url = `latest?amount=${request.amount}&from=${request.from}&to=${request.to}`;
    return this.httpService.get(url).pipe(
      map((data) => {
        if (data?.rates) {
          return new ConvertionResponse(request,data.rates[request.to]);
        } else {
          return new ConvertionResponse(request,1);
        }
      })
    )
  }

  mapObjectToArray(object: ICurrenciesResponse): CurrenciesResponse[] {
    const array: CurrenciesResponse[] = [];
    for (const key in object) {
      array.push(new CurrenciesResponse({[key]: object[key]}));
    }
    return array;
  }

  isConvertAllowed(value: IConverterForm): boolean {
    if (value.amount && value.amount > 0) {
      if (value.from && value.to) {
        if (value.from !== value.to) {
          return true;
        }
      }
    }
    return false;
  }

  isConvertTheSame(prev: IConverterForm, curr: IConverterForm): boolean {
    if (prev.amount === curr.amount) {
      if (prev.from === curr.from) {
        if (prev.to === curr.to) {
          return true;
        }
      }
    }
    return false;
  }
}
