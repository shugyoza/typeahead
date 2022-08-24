import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { Movie } from '../shared/model/movie.interface';
import { titles } from '../shared/data/titles';
import { isObservable } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('filterTitles should return a filtered array', () => {
    let _query = '2016';
    let result = service.filterTitles(_query, titles);
    expect(Array.isArray(result)).toBeTrue();
    expect(result.length).toEqual(1);

    _query = 'digital';
    result = service.filterTitles(_query, titles);
    expect(result.length).toEqual(9);
  })

  it('fetchTitles() updates the movies$ BehaviorSubject', () => {
    let result = service.fetchTitles();
    expect(isObservable(result)).toBeTrue();
  })
});
