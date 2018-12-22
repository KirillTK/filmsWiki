import {Component, Input, OnInit} from '@angular/core';
import {ReviewService} from '../../../shared/service/review.service';
import {st} from '@angular/core/src/render3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public doughnutChartLabels: string[] = ['Positive', 'Negative'];
  public doughnutChartData: number[] = [];
  public doughnutChartType = 'doughnut';
  public countPositiveReviews = 0;
  public countNegativeReviews = 0;
  public isLoaded = false;
  public idUser: string;

  constructor(private reviews: ReviewService) {
    this.idUser = JSON.parse(window.localStorage.getItem('user')).uid;
    this.reviews.getUserPositiveReviews(this.idUser).subscribe((positiveReviews) => {
      this.countPositiveReviews = positiveReviews.length;
    });
    this.reviews.getUserNegativeReviews(this.idUser).subscribe((negativeReviews) => {
      this.countNegativeReviews = negativeReviews.length;
      this.doughnutChartData.push(this.countPositiveReviews);
      this.doughnutChartData.push(this.countNegativeReviews);
      this.isLoaded = true;
    });
  }

  ngOnInit() {
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
