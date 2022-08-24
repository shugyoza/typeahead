import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { titles } from '../shared/data/titles';
import { Movie } from '../shared/model/movie.interface';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('removeMovie(movie) should return an array without the movie passed as an argument', () => {
    let selected = [...titles];
    let movie = selected[selected.length - 1];
    let result = component.removeMovie(movie, selected);
    expect(selected.length - result.length).toEqual(1);
    expect(result.every((doc: Movie) => doc.id !== movie.id)).toEqual(true);

  })
});
