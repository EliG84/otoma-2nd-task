import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SessionStorageKeys } from 'src/app/app.consts';
import { SessionStorageService } from 'src/app/core/session-storage.service';
import { ConvertedHistoryItem, ConvertionResponse } from 'src/app/model/data.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private history$ = new BehaviorSubject<ConvertedHistoryItem[]>([]);
  history_public$ = this.history$.asObservable();

  constructor(private readonly sessionStorageService: SessionStorageService) {
    const existingHistory = sessionStorageService.readItem(SessionStorageKeys.COVERTED_HISTORY);
    this.history$.next(existingHistory || []);
   }

  addHistory(convertion: ConvertionResponse): void {
    const existing = this.history$.getValue();
    existing.push(new ConvertedHistoryItem(convertion));
    this.history$.next(existing);
    this.overwriteSessionStorage();
  }

  overwriteSessionStorage(): void {
    this.sessionStorageService.setItem(SessionStorageKeys.COVERTED_HISTORY, this.history$.getValue());
  }
}
