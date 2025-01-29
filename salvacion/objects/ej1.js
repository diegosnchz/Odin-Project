function Book(title, author, nPages, isRead) {
  this.title = title;
  this.author = author;
  this.nPages = nPages;
  this.isRead = isRead;

  this.info = function() {
    const readStatus = this.isRead ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.nPages} pages, ${readStatus}`;
  };
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(book1.info());