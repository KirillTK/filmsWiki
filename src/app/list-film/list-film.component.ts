import {Component, OnInit, ViewChild} from '@angular/core';
import {FilmsService} from '../shared/service/films.service';
import {Film} from '../shared/model/film';
import {MatSelect} from "@angular/material";
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {


  filmStr = '';
  filmsList: Film[] = [];
  copyFilmsList: Film[] = [];
  years: number[] = [];
  genres: string[] = [];

  @ViewChild('yearElement') yearElement: MatSelect;
  @ViewChild('genreElement') genreElement: MatSelect;
  public isLoaded = false;

  constructor(private filmsService: FilmsService) {
  }

  ngOnInit() {
    this.filmsService.getFilmList()
      .subscribe((data) => {
        this.filmsList = data;

        this.years = _.uniq(this.filmsList.map(film => film.year));
        this.genres = _.uniq(this.filmsList.map(film => film.genre));

        this.copyFilmsList = this.filmsList;
        this.isLoaded = true;
      });
  }


  onChangeYearFilter(data, field) {
    const genre = this.genreElement.value;
    if (genre) {
      this.copyFilmsList = this.filmsList.filter((film) => film[field] === data && film['genre'] === genre);
    } else {
      this.copyFilmsList = this.filmsList.filter((film) => film[field] === data);
    }
  }

  onChangeGenreFilter(data, field) {
    const year = this.yearElement.value;
    if (year) {
      this.copyFilmsList = this.filmsList.filter((film) => film[field] === data && film['year'] === year);
    } else {
      this.copyFilmsList = this.filmsList.filter((film) => film[field] === data);
    }
  }

  resetFilter() {
    this.yearElement.value = '';
    this.genreElement.value = '';
    this.copyFilmsList = this.filmsList;
  }
}
