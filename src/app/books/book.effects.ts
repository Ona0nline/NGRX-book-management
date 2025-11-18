import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as bookActions from './book.actions'
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of} from "rxjs";

@Injectable()
export class BookEffects{

    // Actions is whatver actions are curr running in our ngrx application
    // Only run effects when a specific action appears
    // will  only run when action of type AddBook appears. Define what we want to happen
    addBook$ = createEffect(() => this.actions$.pipe(
        ofType(bookActions.AddBook),
        // action is this case is our Book
        mergeMap((action => this.bookService.addBook(action)
        .pipe(map(book => bookActions.AddBookSuccess(book)),
        catchError((error) => of(bookActions.AddBookFailure(error)))
    )))
    ))

    constructor(
        private actions$: Actions, 
        private bookService: BookService
    ){
 
    }

}