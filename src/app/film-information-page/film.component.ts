import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmsService} from '../shared/service/films.service';
import {Film} from '../shared/model/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  public id = '';
  public film: Film;
  public isLoaded = false;

  constructor(private route: ActivatedRoute, private filmsService: FilmsService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((param) => {
        this.id = param['id'];
      });
    this.filmsService.getFilmById(this.id)
      .subscribe((film) => {
        this.film = <Film>film;
        this.isLoaded = true;
      });
  }
}

