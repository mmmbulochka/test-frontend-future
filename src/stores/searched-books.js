import { makeAutoObservable } from "mobx";
import { getBooks } from "../connections/books";
import { searchedBooks } from "./index";

class SearchedBooks {
  constructor() {
    makeAutoObservable(this);
  }
  searched = false;
  number = 0;
  books = [];
  text = "";
  subject = "all";
  sorting = "relevance";
  searchedText = "";
  async getBooks() {
    if (!this.text) {
      this.books.clear();
      return;
    } else if (this.searchedText !== this.text) {
      this.books.clear();
    }
    const response = await getBooks({
      text: this.text,
      subject: this.subject,
      sorting: this.sorting,
      startIndex: this.books.length,
    });
    this.books.push(...(response.items || [])); // this.books = response.items;
    this.number = response.totalItems || 0;
    this.searched = true;
    this.searchedText = this.text;
  }
}

export default SearchedBooks;
