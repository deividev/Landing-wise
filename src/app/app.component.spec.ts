import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { render } from '@testing-library/angular';
import { TranslateModule } from '@ngx-translate/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, TranslateModule.forRoot()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'static-template' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('static-template');
  });
  it('should match the snapshot', async () => {
    const { container } = await render(AppComponent);
    expect(container).toMatchSnapshot();
  });
});
