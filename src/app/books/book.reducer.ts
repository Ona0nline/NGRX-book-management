import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook } from "./book.actions";
// reducer needs to know about hte book becuase reucder is taking part of small part of the sate.
// Reducer only takes care of a segment f the appState. BookReducer takes care of Book app
import { Book } from "../models/book";

// Reducer needs an inital state
export const initialState: Book[] = [];
export const BookReducer = createReducer(
    initialState, 
    // This state is not the entire global state, it's the current state that the reducer is taking care off
    // Copying array
    // Reducer should take books from previous state then add the new book into the array
    on(AddBook, (state, {id, title, author}) => [...state, {id, title, author}]),
    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))

);