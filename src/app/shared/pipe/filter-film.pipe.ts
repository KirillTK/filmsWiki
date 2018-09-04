import { Pipe, PipeTransform } from '@angular/core';
import {Film} from '../model/film';

@Pipe({
  name: 'filterFilm'
})
export class FilterFilmPipe implements PipeTransform {

  transform(films: Film[], value: string): Film[] {
    return films.filter( film => {
      return film.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }

}
