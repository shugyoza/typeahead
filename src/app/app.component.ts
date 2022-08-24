import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './api-service/api.service';
import { Movie } from './shared/model/movie.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageTitle = 'by Sony Pictures Entertainment';
  title = 'the at-home Runner typeahead exercise';
  requirements = [
    `We have supplied sample json in the data directory to return title suggestions for a typeahead input component you'll create.`,
    'Please build a client that returns the sample json, as you would any client interacting with a json API.',
    'When the user types 3 or more characters into the input, it should show an Angular Material typeahead/autocomplete dropdown.',
    `When the user makes a selection from the dropdown, a new element below the input should show the selection's full name. Feel free to be creative with your styles.`,
    'The selected titles should be removable.',
    'This mimics a form element in our application where users assign title metadata to assets, so if you would like to build something that replicates a form submission, feel free to come up with your own solution to how it "saves" the data.'
  ];
  projectNote = [
    'Search filter using .includes() method, means any match in any part of the string is valid;',
    'Search filter is note CaSeSensitive;',
    'Search filter using RxJS debounceTime which would be useful to reduce API calls if the search directly hit backend API;',
    'Codes tested with Jasmine/Karma with Code Coverage 86.56% (58/67 statements), 86.2% (50/58 lines);',
    'Submit Selection button can be customized to call an API, either to persist data to backend, email, or anything.'
  ]

  subscriptions$: Subscription[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // fetch list of movies from 'backend'
    this.api.fetchTitles();
  }

  onSubmit(): Movie[] {
    let result: Movie[] = [];
    this.subscriptions$.push(
      this.api.selected$.subscribe({
        next: (list: Movie[]) => result = list,
        error: (err: Error) => console.error(err)
      })
    );
    console.log(result);
    return result;
  }

}
