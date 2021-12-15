import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './ui/category-list/category-list.component';
import { FirebaseCategoriesService } from './infrastructure/firebase-categories.service';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent
  ],
    imports: [

        AngularFirestoreModule,
        CommonModule,
        RouterModule
    ],
  exports: [
    CategoriesComponent,
    CategoryListComponent
  ],
  providers: [
    FirebaseCategoriesService
  ]
})
export class CategoriesModule { }
