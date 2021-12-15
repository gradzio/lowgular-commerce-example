import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MessagesModule } from '@lowgular/messages';
import { CategoriesModule } from '@lowgular/categories';
import { CategoryPageComponent } from './category-page/category-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ContactPageComponent,
    CategoryPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    MessagesModule,
    CategoriesModule
  ],
  exports: [
    RouterModule,
    HomePageComponent,
    ContactPageComponent,
    CategoryPageComponent
  ]
})
export class PagesModule { }
