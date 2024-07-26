function randomNum(): string {
  const string1 = "qwertzuioalkjshdsfgyxcvbnm1234567890";
  const string2 = string1.split("");
  let target = "";
  for (let i = 0; i < string1.length - Math.floor(string1.length / 2); i++) {
    target += string2[Math.floor(Math.random() * string2.length)];
  }
  return target;
}

class Book {
  title: string;
  author: string;
  isbn: string;
  checkedOut: boolean;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.isbn = randomNum();
    this.checkedOut = false;
  }

  checkout(): void {
    this.checkedOut = true;
  }

  returnBook(): void {
    this.checkedOut = false;
  }

  toString(): string {
    const status = this.checkedOut ? "checked out" : "in the library";
    return `Book is ${this.title}.\nAuthor is ${this.author}\nISBN number is ${this.isbn}\nThis book is ${status}.`;
  }
}

class Member {
  name: string;
  memberId: string;
  checkoutBooks: Book[];

  constructor(name: string) {
    this.name = name;
    this.memberId = randomNum();
    this.checkoutBooks = [];
  }

  checkoutBook(book: Book): void {
    if (!this.checkoutBooks.includes(book)) {
      if (!book.checkedOut) {
        this.checkoutBooks.push(book);
        book.checkout();
        console.log(`Book '${book.title}' checked out by ${this.name}.`);
      } else {
        console.log(`Book '${book.title}' is already checked out.`);
      }
    } else {
      console.log(`Book '${book.title}' is already checked out by the member.`);
    }
  }

  returnBook(book: Book): void {
    const index = this.checkoutBooks.indexOf(book);
    if (index !== -1) {
      this.checkoutBooks.splice(index, 1);
      book.returnBook();
      console.log(`Book '${book.title}' returned by ${this.name}.`);
    } else {
      console.log(
        `Book '${book.title}' is not in the member's checked-out list.`
      );
    }
  }

  toString(): string {
    return `This is our member name: ${this.name}\nThis is member id: ${
      this.memberId
    }\nThese are member books: ${this.checkoutBooks
      .map((book) => book.title)
      .join(", ")}`;
  }
}

class Library {
  books: Book[];
  members: Member[];

  constructor() {
    this.books = [];
    this.members = [];
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(book: Book): void {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  registerMember(member: Member): void {
    this.members.push(member);
  }

  removeMember(member: Member): void {
    const index = this.members.indexOf(member);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }

  toString(): string {
    return `Here are the all members: ${this.members
      .map((member) => member.name)
      .join(", ")}\nHere are the all book titles: ${this.books
      .map((book) => book.title)
      .join(", ")} and book authors: ${this.books
      .map((book) => book.author)
      .join(", ")}`;
  }
}

// Example usage

const library = new Library();

// Add books to the library
const book1 = new Book("White Book", "Burhan");
const book2 = new Book("Black", "Jack");
library.addBook(book1);
library.addBook(book2);

// Register members to the library
const member1 = new Member("Oliver");
const member2 = new Member("Kalid");
library.registerMember(member1);
library.registerMember(member2);

// Print initial library state
console.log(library.toString());
console.log();

// Test cases
console.log("Test Cases:");

// Member 1 checks out book 1
member1.checkoutBook(book1);
// Member 2 tries to check out the same book
member2.checkoutBook(book1);

// Member 1 returns the book
member1.returnBook(book1);
// Member 2 successfully checks out the book
member2.checkoutBook(book1);

// Print final state
console.log();
console.log(library.toString());
