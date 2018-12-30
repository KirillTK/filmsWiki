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
  private reviews: Review[];
  public documentForm: FormGroup;
  public isAlreadyWrote: boolean;
  private reviewControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
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
    this.reviewService.getReviewByIdFilm(this.id).subscribe( reviews => {
      this.reviews = reviews;
      console.log(this.ifReviewIsExist());
      this.isAlreadyWrote = this.ifReviewIsExist();
      console.log(this.reviews);
      console.log('isAlreadyWrote', this.isAlreadyWrote);
    });
    const user = JSON.parse(window.localStorage.getItem('user'));
    this.isAuth = !!user;

    console.log('auth', this.isAuth);
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
    this.isAlreadyWrote = true;
  }

  ifReviewIsExist() {
    const uid = JSON.parse(window.localStorage.getItem('user')).uid;
    return this.reviews.filter(review => review.userID === uid).length !== 0;
  }

}
