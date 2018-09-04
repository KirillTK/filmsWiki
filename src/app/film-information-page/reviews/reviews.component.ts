import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../../shared/model/review';
import {ReviewService} from '../../shared/service/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  public reviews: Review[];
  private limitRewies = 4;
  @Input() idFilm: string;


  constructor(private reviewService: ReviewService) {
    console.log(this.reviews);
  }

  ngOnInit() {
    this.reviewService.getReviewById(this.idFilm)
      .subscribe((data) => {
        this.reviews = data;
      });
  }

  getMoreReviews() {
    this.reviewService.getMoreReviews(this.idFilm, this.limitRewies)
      .subscribe((data) => {
        this.limitRewies += 2;
        this.reviews = data;
      });
  }
}
