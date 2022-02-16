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
  isSearching = false;
  searchedSubject = "";
  searchedSorting = "";
  async getBooks() {
    if (!this.text) {
      this.books.clear();
      this.number = 0;
      return;
    } else if (
      this.searchedText !== this.text ||
      this.subject !== this.searchedSubject ||
      this.sorting !== this.searchedSorting
    ) {
      this.books.clear();
      this.number = 0;
    }
    this.isSearching = true;
    const response = await getBooks({
      text: this.text,
      subject: this.subject,
      sorting: this.sorting,
      startIndex: this.books.length,
    });
    this.books.push(...(response.items || [])); // this.books = response.items;
    this.number = response.totalItems || 0;
    this.searchedSubject = this.subject;
    this.searchedSorting = this.sorting;
    this.searched = true;
    this.searchedText = this.text;
    this.isSearching = false;
  }
}

export default SearchedBooks;
