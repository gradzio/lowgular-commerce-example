import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { filterByCriterion } from '@lowgular/shared';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../application/category.dto';

@Injectable()
export class FirebaseCategoriesService {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<CategoryDTO> = {}): Observable<CategoryDTO[]> {
    return this._client.collection<CategoryDTO>('categories').valueChanges({idField: 'id'})
    .pipe(map(data => filterByCriterion(data, criterion)));
  }
}
