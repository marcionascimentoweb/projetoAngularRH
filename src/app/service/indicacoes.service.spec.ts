import { TestBed } from '@angular/core/testing';

import { IndicacoesService } from './indicacoes.service';

describe('IndicacoesService', () => {
  let service: IndicacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
