import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocomplete } from '@angular/material/autocomplete';

import { SearchFieldComponent } from './search-field.component';
import { titles } from '../shared/data/titles';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFieldComponent, MatAutocomplete ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('select(movie) should add the movie to the selection array', () => {
    let movie = titles[Math.floor(titles.length / 2)];
    let result = component.select(movie);
    expect(Array.isArray(result)).toBeTrue();
    expect(result.length).toEqual(1);
    expect(result[result.length - 1].id).toEqual(movie.id);
  })

  it('debounceSearch(delay) must have a default delay time between last event to emitting value', () => {
    let delay = component.debounceSearch();
    expect(delay).toBeGreaterThan(1); // greater than 1 ms;
  })
});
