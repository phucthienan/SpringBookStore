import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { BookViewComponent } from './components/book-view/book-view.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/new', component: AddNewBookComponent },
  { path: 'books/:id', component: BookViewComponent },
  { path: 'books/:id/edit', component: BookEditComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
