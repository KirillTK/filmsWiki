import {Component, OnInit} from '@angular/core';
import {ReviewService} from '../shared/service/review.service';
import {Review} from '../shared/model/review';

@Component({
  selector: 'app-you-reviews-page',
  templateUrl: './you-reviews-page.component.html',
  styleUrls: ['./you-reviews-page.component.scss']
})
export class YouReviewsPageComponent implements OnInit {
  private idUser: string;
  private reviews: Review[];

  constructor(private reviewService: ReviewService) {
    this.idUser = JSON.parse(window.localStorage.getItem('user')).uid;
  }

  ngOnInit() {
    this.reviewService.getAllUserReviews(this.idUser)
      .subscribe((data) => {
        this.reviews = data;
      });
  }

}
