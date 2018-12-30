import {Component, OnInit} from '@angular/core';
import {ReviewService} from '../shared/service/review.service';
import {Review} from '../shared/model/review';
import {MatDialog} from '@angular/material';
import {DialogReview} from './review-dialog/review-dialog.component';

@Component({
  selector: 'app-you-reviews-page',
  templateUrl: './you-reviews-page.component.html',
  styleUrls: ['./you-reviews-page.component.scss']
})
export class YouReviewsPageComponent implements OnInit {
  public idUser: string;
  public reviews: Review[];

  constructor(private reviewService: ReviewService, public dialog: MatDialog) {
    this.idUser = JSON.parse(window.localStorage.getItem('user')).uid;
  }

  ngOnInit() {
    this.reviewService.getAllUserReviews(this.idUser)
      .subscribe((data) => {
        this.reviews = data;
      });
  }


  deleteReview(event, reviewItem, review: Review) {
    this.reviewService.removeReview(review);
    reviewItem.remove();
    this.reviewService.getAllUserReviews(this.idUser)
      .subscribe((data) => {
        this.reviews = data;
      });
  }

  openDialog(event, reviewText , review: Review) {
    let copyReview = review;
    const dialogRef = this.dialog.open(DialogReview, {
      width: '500px',
      data: review
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        review.review = result.text;
        review.opinion = result.opinion;
        this.reviewService.updateReview(review);
      }
    });
  }
}
