import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroVideoOverlayComponent } from './hero-video-overlay.component';

describe('HeroVideoOverlayComponent', () => {
  let component: HeroVideoOverlayComponent;
  let fixture: ComponentFixture<HeroVideoOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroVideoOverlayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroVideoOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
