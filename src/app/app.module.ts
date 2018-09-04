import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListFilmComponent} from './list-film/list-film.component';
import {FilterFilmPipe} from './shared/pipe/filter-film.pipe';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FilmsService} from './shared/service/films.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {FilmComponent} from './film-information-page/film.component';
import {MaterialComponentModule} from './shared/module/material-component.module';
import {ReviewsComponent} from './film-information-page/reviews/reviews.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './shared/service/auth.service';
import {ReviewTextAreaComponent} from './shared/component/review-text-area/review-text-area.component';
import {AutosizeModule} from 'ngx-autosize';
import {YoutubeSrcPipe} from './shared/pipe/youtube-src.pipe';
import {YouReviewsPageComponent} from './you-reviews-page/you-reviews-page.component';
import {ReviewService} from './shared/service/review.service';
import { WriteReviewComponent } from './film-information-page/write-review/write-review.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFilmComponent,
    FilterFilmPipe,
    YoutubeSrcPipe,
    FilmComponent,
    ReviewsComponent,
    ReviewTextAreaComponent,
    YouReviewsPageComponent,
    WriteReviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'bookKeeping'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    MaterialComponentModule,
    ReactiveFormsModule,
    AutosizeModule
  ],
  providers: [FilmsService, AuthService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
