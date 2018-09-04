import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Film} from '../model/film';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class FilmsService {

  itemsCollection: AngularFirestoreCollection<Film>;

  constructor(private db: AngularFirestore) {
    this.itemsCollection = this.db.collection('films');
  }

  getFilmList(): Observable<Film[]> {
    return this.itemsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Film;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getFilmById(id: string) {
    return this.db.doc('films/' + id).valueChanges();
  }

}
