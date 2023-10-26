/*
Filename: complexApp.js

This code is a complex application that simulates a virtual library management system. 
It has multiple classes and functions to handle various operations such as adding books, 
deleting books, searching for a book, checking out books, returning books, and generating reports.

Please note that this Code is a simplified representation and does not include all possible edge cases or error handling.

*/

class Book {
  constructor(title, author, genre, totalCopies, availableCopies) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.totalCopies = totalCopies;
    this.availableCopies = availableCopies;
  }
}

class Library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
    this.borrowedBooks = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  deleteBook(title) {
    const bookIndex = this.books.findIndex((book) => book.title === title);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
      return true;
    }
    return false;
  }

  searchBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }

  checkOutBook(title) {
    const book = this.searchBookByTitle(title);
    if (book && book.availableCopies > 0) {
      book.availableCopies--;
      this.borrowedBooks.push(book);
      return true;
    }
    return false;
  }

  returnBook(title) {
    const borrowedBookIndex = this.borrowedBooks.findIndex(
      (book) => book.title === title
    );
    if (borrowedBookIndex !== -1) {
      const book = this.borrowedBooks.splice(borrowedBookIndex, 1)[0];
      book.availableCopies++;
      this.books.push(book);
      return true;
    }
    return false;
  }

  generateReport() {
    console.log(`Library Name: ${this.name}`);
    console.log(`Location: ${this.location}`);
    console.log("==== Books ====");
    this.books.forEach((book) => {
      console.log(
        `Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Available Copies: ${book.availableCopies}`
      );
    });
    console.log("==== Borrowed Books ====");
    this.borrowedBooks.forEach((book) => {
      console.log(
        `Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`
      );
    });
  }
}

// Create a library instance
const myLibrary = new Library("My Library", "Somewhere");

// Add books to the library
myLibrary.addBook(new Book("Book 1", "Author 1", "Genre 1", 10, 10));
myLibrary.addBook(new Book("Book 2", "Author 2", "Genre 2", 5, 5));
myLibrary.addBook(new Book("Book 3", "Author 3", "Genre 3", 20, 20));

// Perform operations
myLibrary.checkOutBook("Book 1");
myLibrary.checkOutBook("Book 2");
myLibrary.returnBook("Book 1");

// Generate library report
myLibrary.generateReport();