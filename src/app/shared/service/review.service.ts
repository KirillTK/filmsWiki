import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {Review} from '../model/review';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable()
export class ReviewService {

  reviewCollection: AngularFirestoreCollection<Review>;

  constructor(private db: AngularFirestore) {
    this.reviewCollection = this.db.collection('reviews');
  }

  getReviewById(idFilm: string): Observable<any[]> {
    return this.db.collection('reviews', ref => ref.limit(2).where('filmID', '==', idFilm)).valueChanges();
  }

  getMoreReviews(idFilm: string, limit: number): Observable<any[]> {
    return this.db.collection('reviews', ref => ref.limit(limit).where('filmID', '==', idFilm)).valueChanges();
  }


  addReview(review: Review) {
    this.reviewCollection.add(review);
  }

  getAllUserReviews(userId: string): Observable<any[]> {
    return this.db.collection('reviews', ref => ref.where('userID', '==', userId)).valueChanges();
  }


}
