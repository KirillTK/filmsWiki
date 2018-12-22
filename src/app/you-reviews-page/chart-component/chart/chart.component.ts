import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Review} from '../../../shared/model/review';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {

  public doughnutChartLabels: string[] = ['Positive', 'Negative'];
  public doughnutChartData: number[] = [];
  public doughnutChartType = 'doughnut';
  private countPositiveReviews = 0;
  private countNegativeReviews = 0;
  public isLoaded = false;

  @Input() reviewsData: Review[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.reviewsData) {
      this.countNegativeReviews = this.getCountNegativeReviews(this.reviewsData);
      this.countPositiveReviews = this.getCountPositiveReviews(this.reviewsData);
      this.doughnutChartData.push(this.countPositiveReviews);
      this.doughnutChartData.push(this.countNegativeReviews);
      this.isLoaded = true;
    }

  }

  ngOnInit() {}

  private getCountPositiveReviews(reviews: Review[]) {
    return reviews.filter(review => review.opinion === 'Positive').length;
  }

  private getCountNegativeReviews(reviews: Review[]) {
    return reviews.filter(review => review.opinion === 'Negativ').length;
  }

}
