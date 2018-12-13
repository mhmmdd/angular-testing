import { TestBed } from '@angular/core/testing';

import { RemoteService } from './remote.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('RemoteService', () => {
  let service: RemoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RemoteService]
    });

    // inject the service
    service = TestBed.get(RemoteService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('#fetchViaHttp should return the json', () => {
    service.fetchViaHttp().subscribe(data => {
      expect(data.name).toBe('Juri');
    });

    const req = httpMock.expectOne('/someendpoint/people.json', 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'Juri'
    });
  });
});
