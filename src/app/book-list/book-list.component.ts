import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  // Adding dollar sign is convention to other devs to know that this is of type observable
  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>){
    // Is this kind of like setting the value of the book from the "database"?
    this.books$ = store.pipe(select('book'))
  }

  addBook(id: string, title: string, author: string){
    // Dispatching (starting an action) on our store
    // Have also noticed that with actions you pass the information in as an object
    // As soon as Store recieves an AddBook action, it knows that is meant to be handled by a reducer

    this.store.dispatch(AddBook({id, title, author}));
  }

  removeBook(bookId: string){
    this.store.dispatch(RemoveBook({bookId}));
  }

}
