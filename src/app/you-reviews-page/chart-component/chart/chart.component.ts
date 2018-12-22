import {Component, Input, OnInit} from '@angular/core';
import {ReviewService} from '../../../shared/service/review.service';
import {st} from '@angular/core/src/render3';
import {Review} from '../../../shared/model/review';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public doughnutChartLabels: string[] = ['Positive', 'Negative'];
  public doughnutChartData: number[] = [];
  public doughnutChartType = 'doughnut';
  private countPositiveReviews = 0;
  private countNegativeReviews = 0;
  public isLoaded = false;
  public idUser: string;
  private arrayReviews = [];

  constructor(private reviews: ReviewService) {
  }

  ngOnInit() {
    this.idUser = JSON.parse(window.localStorage.getItem('user')).uid;
    this.reviews.getAllUserReviews(this.idUser).subscribe( (review) => {
      this.arrayReviews = review;
      console.log(this.arrayReviews);
      this.countNegativeReviews = this.getCountNegativeReviews(this.arrayReviews);
      this.countPositiveReviews = this.getCountPositiveReviews(this.arrayReviews);
      this.doughnutChartData.push(this.countPositiveReviews);
      this.doughnutChartData.push(this.countNegativeReviews);
      this.isLoaded = true;
    });
  }

  private getCountPositiveReviews(reviews: Review[]) {
    return reviews.filter(review => review.opinion === 'Positive').length;
  }

  private getCountNegativeReviews(reviews: Review[]) {
    return reviews.filter(review => review.opinion === 'Negativ').length;
  }

}
