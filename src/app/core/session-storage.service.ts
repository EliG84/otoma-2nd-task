import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  setItem(key: string ,data: any): void {
    try {
      const stringyfied = JSON.stringify(data);
      sessionStorage.setItem(key, stringyfied);
    } catch (error) {
      console.error('session storage error');
    }
  }

  readItem(key: string): any {
    try {
      const item = sessionStorage.getItem(key);
      if (item) return JSON.parse(item);
      return null;
    } catch (error) {
      console.error('session storage error');
    }
  }
}
