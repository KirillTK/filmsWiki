import {Component, Input, OnInit} from '@angular/core';
import {ReviewService} from '../../shared/service/review.service';
import {Review} from "../../shared/model/review";

@Component({
  selector: 'app-chart-film',
  templateUrl: './chart-film.component.html',
  styleUrls: ['./chart-film.component.scss']
})
export class ChartFilmComponent implements OnInit {

  public likeWidth: string;
  public dislikeWidth: string;
  public countPositiveReviews = 0;
  public countNegativeReviews = 0;
  public isLoaded = false;
  public isManyReviews = false;
  private sumReviews = 0;
  @Input() idFilm: string;

  constructor(private reviewService: ReviewService) {
  }

  ngOnInit() {
    this.reviewService.getReviewByIdFilm(this.idFilm)
      .subscribe((data) => {
        this.countNegativeReviews = this.getCountNegativeReviews(data);
        this.countPositiveReviews = this.getCountPositiveReviews(data);
        this.setDiagram();
        this.isManyReviews = this.isManyReview(data);
        this.isLoaded = true;
      });
  }

  private setDiagram(): void {
    this.sumReviews = this.countPositiveReviews + this.countNegativeReviews;
    this.likeWidth = Math.round((this.countPositiveReviews / this.sumReviews * 100)) + '%';
    this.dislikeWidth = Math.round((this.countNegativeReviews / this.sumReviews * 100)) + '%';
  }

  private getCountPositiveReviews(reviews: Review[]) {
    return reviews.filter(review => review.opinion === 'Positive').length;
  }

  private getCountNegativeReviews(reviews: Review[]) {
    return reviews.filter(review => review.opinion === 'Negativ').length;
  }

  private isManyReview(data: Review[]){
    return data.length > 0;
  }



}
