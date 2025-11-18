import {createAction, props} from "@ngrx/store";
import { Book } from "../models/book";

// Name it, define the type by Entity, add props (optiona). We want to submit a book to this action
// kind of giving like functions you would likely have in the service but as one liners...Props remind me of params
// needed to complete said function...

// Initial action but it could face issues. We add two more for thesuccess and possible failur
export const AddBook = createAction('[Book] Add Book', props<Book>());
export const AddBookSuccess = createAction('[Book] Added Book Successfully', props<Book>());
export const AddBookFailure = createAction('[Book] Failed to Add book', props<{error:any}>());


export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>());

