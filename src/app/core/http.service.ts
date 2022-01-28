import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = '';
  constructor(private readonly httpClient: HttpClient) {
    this.baseUrl = environment.BASE_URL;
   }

  get(url: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${url}`).pipe(
      map(this.handleResponse),
      catchError(() => of(null))
    )
  }

  handleResponse(response: HttpResponse<any>): any | HttpResponse<any> {
    if (response.body && response.body.hasOwnProperty('data')) {
      return response.body.data;
    }
    return response;
  }
}
