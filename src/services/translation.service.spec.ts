import { TestBed } from '@angular/core/testing';

import { TranslationService } from './translation.service';
import { TranslateModule } from '@ngx-translate/core';

describe('TranslateService', () => {
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    });
    service = TestBed.inject(TranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
