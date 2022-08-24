import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../api-service/api.service';
import { Movie } from '../shared/model/movie.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  selected: Movie[] = [];
  subscriptions$: Subscription[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // initialize the selected list
    this.subscriptions$.push(
      this.api.selected$.subscribe({
        next: (list: Movie[]) => this.selected = list,
        error: (err: Error) => console.error(err)
      })
    );
  };

  ngOnDestroy(): void {
    this.subscriptions$.forEach((sub$: Subscription) => sub$.unsubscribe());
  };

  // method to remove a movie from selected list
  removeMovie(movie: Movie, selected = this.selected): Movie[] {
    const result = selected.filter((doc: Movie) => doc.id !== movie.id);
    this.api.selected$.next(result);
    return result;
  }
}
