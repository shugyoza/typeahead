import { Injectable } from '@angular/core';
import { titles } from '../data/titles';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  titles: any[] = [];

  constructor() { }

  fetchTitles(): void {
    this.titles = titles;
  }
}
