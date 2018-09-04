import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmComponent} from './film-information-page/film.component';
import {ListFilmComponent} from './list-film/list-film.component';
import {YouReviewsPageComponent} from "./you-reviews-page/you-reviews-page.component";


const routes: Routes = [
  {path: '', component: ListFilmComponent},
  {path: 'film/:id', component: FilmComponent},
  {path: 'reviews', component: YouReviewsPageComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
