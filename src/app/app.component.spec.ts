import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as pageTitle 'by Sony Pictures Entertainment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.pageTitle).toEqual('by Sony Pictures Entertainment');
  });

  it(`should have as title 'the at-home Runner typeahead exercise'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('the at-home Runner typeahead exercise');
  });

  it('onSubmit() takes the array of selected movies meant for any API call', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let result = app.onSubmit();
    expect(Array.isArray(result)).toBeTrue();
  })
});
