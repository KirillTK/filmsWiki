import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {Review} from '../model/review';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map} from "rxjs/internal/operators";
import {Film} from "../model/film";

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

  // getAllUserReviews(userId: string): Observable<any[]> {
  //   return this.db.collection('reviews', ref => ref.where('userID', '==', userId)).valueChanges();
  // }

  getAllUserReviews(userId: string): Observable<any[]> {
    return this.db.collection('reviews', ref => ref.where('userID', '==', userId))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Film;
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        })
      );
  }

  removeReview(review: Review){
    const reviewElem = this.db.doc(`reviews/${review.id}`);
    reviewElem.delete();
  }

  // Remove this methods

  getAllPositiveReviewsById(idFilm: string) {
    return this.db.collection('reviews', ref => ref.where('opinion', '==', 'Positive').where('filmID', '==', idFilm)).valueChanges();
  }

  getAllNegativeReviewsById(idFilm: string) {
    return this.db.collection('reviews', ref => ref.where('opinion', '==', 'Negativ').where('filmID', '==', idFilm)).valueChanges();
  }
}
