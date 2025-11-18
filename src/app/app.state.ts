import { Book } from "./models/book";
// Never changing app state directly
export interface AppState {
    readonly book: Book[]
}
