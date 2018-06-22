import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;
  book;
  booksLoading;
  pagedBooks = [];
  pageSize = 10;
  p: number = 1;
  userFilter: any = { bookName: '' };

  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.booksLoading = true
    this._bookService.getAllBooks().subscribe(data => {
      this.books = data;
      this.pagedBooks = _.take(this.books, this, this.pageSize);
    },
      null,
      () => { this.booksLoading = false; });
  }

  save() {
    if (this.book.id)
      this._bookService.updateBook(this.books);
    else
      this._bookService.insertBook(this.book);
  }

  deleteBook(book) {
    if (confirm("Are you sure you want to delete book?")) {
      var index = this.books.indexOf(book)
      this.books.splice(index, 1);
      this._bookService.deleteBook(book.bookId)
        .subscribe(null,
          err => {
            alert("Could not delete the book.");
            this.books.splice(index, 0, book);
          });
    }
  }

  select(book) {
    this.book = book;
    this._bookService.getBook(book.bookId)
      .subscribe(
        data =>
          this.book.comments = data,
        null
      );
  }

  onPageChanged(page) {
    var startIndex = (page - 1) * this.pageSize;
    this.pagedBooks = _.take(_.rest(this.books, startIndex), this.pageSize);
  }

}
