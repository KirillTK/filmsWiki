import {Component, Input, OnInit} from '@angular/core';
import {FilmsService} from '../shared/service/films.service';
import {Film} from '../shared/model/film';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {


  filmStr = '';
  filmsList: Film[] = [];
  private isLoaded = false;

  constructor(private filmsService: FilmsService) {
  }

  ngOnInit() {
    this.filmsService.getFilmList()
      .subscribe((data) => {
        this.filmsList = data;
        this.isLoaded = true;
      });
  }
}
