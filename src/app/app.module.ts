import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import 'hammerjs';
import { ChartsModule } from 'ng2-charts';
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
import { ChartComponent } from './you-reviews-page/chart-component/chart/chart.component';
import { ChartFilmComponent } from './film-information-page/chart-film/chart-film.component';
import {ChartDynamicComponent} from './you-reviews-page/chart-dynamic/chart-dynamic.component';
import {DialogReview} from './you-reviews-page/review-dialog/review-dialog.component';

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
    WriteReviewComponent,
    ChartComponent,
    ChartFilmComponent,
    ChartDynamicComponent,
    DialogReview
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
    AutosizeModule,
    ChartsModule
  ],
  providers: [FilmsService, AuthService, ReviewService],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogReview
  ]
})
export class AppModule {
}
