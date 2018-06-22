import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: any;
  movie;
  moviesLoading;
  pagedMovies = [];
  pageSize = 10;
  p: number = 1;
  userFilter: any = { movieName: '' };

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesLoading = true
    this._movieService.getAllMovies().subscribe(data => {
      this.movies = data;
      this.pagedMovies = _.take(this.movies, this, this.pageSize);
    },
      null,
      () => { this.moviesLoading = false; });
  }

  deleteMovie(movie) {
    if (confirm("Are you sure you want to disactive movie?")) {
      var index = this.movies.indexOf(movie)
      this._movieService.deleteMovie(movie.movieId)
        .subscribe(null,
          err => {
            alert("Could not delete the movie.");
          });
    }
  }

  select(movie) {
    this.movie = movie;
    this._movieService.getMovie(movie.movieId).subscribe(data => this.movie = data, null);
  }

  onPageChanged(page) {
    var startIndex = (page - 1) * this.pageSize;
    this.pagedMovies = _.take(_.rest(this.movies, startIndex), this.pageSize);
  }

}
