import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FirebaseCategoriesService } from '../../infrastructure/firebase-categories.service';
import { CategoryDTO } from '../../application/category.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-category-list',
  templateUrl: './category-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent {

  categories$: Observable<CategoryDTO[]> = this._categoriesService.getAll();

  constructor(private _categoriesService: FirebaseCategoriesService) { }

}
