import { TestBed } from '@angular/core/testing';

import { DemandeDeStageService } from './demande-de-stage.service';

describe('DemandeDeStageService', () => {
  let service: DemandeDeStageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeDeStageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
