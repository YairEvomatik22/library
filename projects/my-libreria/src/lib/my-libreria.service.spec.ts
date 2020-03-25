import { TestBed } from '@angular/core/testing';

import { MyLibreriaService } from './my-libreria.service';

describe('MyLibreriaService', () => {
  let service: MyLibreriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibreriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
