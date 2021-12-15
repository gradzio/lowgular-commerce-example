import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';

export const routes: Routes = [

{ path: '', component: HomePageComponent },
{ path: 'contacts', component: ContactPageComponent },
{ path: ':categoryId', component: CategoryPageComponent }


];
