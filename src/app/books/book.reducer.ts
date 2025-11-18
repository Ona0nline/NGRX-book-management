import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook, AddBookFailure, AddBookSuccess } from "./book.actions";
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

    // Initial modifier should not longer modify teh state BECAUSE it is initial
    on(AddBook, (state) => {return state}),
    // Once service replies, choose which effect to go through with. What must happen per each response
    on(AddBookSuccess, (state, {id, title, author}) => [...state, {id, title, author}]),
    on(AddBookFailure, (state, {error}) => {
        console.error(error);
        return state;
    }),



    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))

);