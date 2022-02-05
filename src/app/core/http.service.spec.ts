import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { currenciesExample } from 'src/assets/test.data';
import { environment } from 'src/environments/environment';
import { apiRoutes } from 'src/app/model/api.model';

describe('HttpService', () => {
  let service: HttpService,
      httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all currencies object', () => {
    service.get(apiRoutes.CURRENCIES).subscribe((currencies) => {
      expect(Object.keys(currencies).length).withContext('empty currency object').toBeGreaterThan(0);
      expect(currencies).withContext('expencted object is different than test data').toEqual(currenciesExample);
    });
    const req = httpTestingController.expectOne(`${environment.BASE_URL}/${apiRoutes.CURRENCIES}`);
    expect(req.request.method).toEqual('GET');
    req.flush(currenciesExample);
  });
});
