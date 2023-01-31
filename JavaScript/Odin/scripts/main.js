// book Object
// - title
// - author
// - pages
// - read

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not yet read"}`;
}

const book1 = new Book("Lightning Thief", "Rick Riordan", 256, true);
const book2 = new Book("Harry Potter", "James Patterson", 400, false);
console.log(book1.info());
console.log(book2.info());