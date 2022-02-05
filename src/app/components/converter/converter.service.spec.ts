import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/core/http.service';
import { SessionStorageService } from 'src/app/core/session-storage.service';

import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  let service: ConverterService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService,SessionStorageService, HttpClient, HttpHandler]
    });
    service = TestBed.inject(ConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
