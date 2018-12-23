import {AfterContentChecked, AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Review} from '../../shared/model/review';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FilmsService} from '../../shared/service/films.service';
import {ActivatedRoute} from '@angular/router';
import {Film} from '../../shared/model/film';
import {ReviewService} from '../../shared/service/review.service';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit, AfterViewChecked {

  @Input() id = '';
  @Input() film: Film;
  public documentForm: FormGroup;
  private reviewControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(1000)
  ]);
  private opinionMovieControl = new FormControl('', [
    Validators.required
  ]);

  public isAuth: boolean;

  constructor(private route: ActivatedRoute, private filmsService: FilmsService,
              private formBuilder: FormBuilder, private reviewService: ReviewService) {
    this.documentForm = this.formBuilder.group({
      'review': this.reviewControl,
      'opinion': this.opinionMovieControl
    });
  }

  ngOnInit() {
    const user = JSON.parse(window.localStorage.getItem('user'));
    this.isAuth = !!user;
  }

  ngAfterViewChecked(): void {
    const user = JSON.parse(window.localStorage.getItem('user'));
    this.isAuth = !!user;
  }

  onSubmit() {
    const review: Review = {
      filmID: this.id,
      opinion: this.documentForm.value.opinion,
      review: this.documentForm.value.review,
      userID: JSON.parse(window.localStorage.getItem('user')).uid,
      userName: JSON.parse(window.localStorage.getItem('user')).displayName,
      userPhoto: JSON.parse(window.localStorage.getItem('user')).photoURL,
      filmName: this.film.name
    };
    this.documentForm.reset();
    this.reviewService.addReview(review);
  }

}
