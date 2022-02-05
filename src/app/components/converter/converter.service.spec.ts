import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/core/http.service';
import { SessionStorageService } from 'src/app/core/session-storage.service';

import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  let service: ConverterService,
      sessionStorageSpy: any,
      httpServiceSpy: any;
  beforeEach(() => {
    sessionStorageSpy = jasmine.createSpyObj('SessionStorageService', ['setItem', 'readItem']);
    httpServiceSpy = jasmine.createSpyObj('HttpService', ['get', 'handleResponse']);
    TestBed.configureTestingModule({
      providers: [{provide: SessionStorageService, useValue: sessionStorageSpy},
                  {provide: HttpService, useValue: httpServiceSpy}],
    });
    service = TestBed.inject(ConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
