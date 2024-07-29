import random

def randomNum():
    string1 = "qwertzuioalkjshdsfgyxcvbnm1234567890"
    string2 = list(string1)
    target = ""
    for _ in range(len(string1) - len(string1) // 2):
        target += random.choice(string2)
    return target

class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.isbn = randomNum()
        self.checked_out = False  # Renamed to avoid conflict

    def checkout(self):
        self.checked_out = True

    def return_book(self):
        self.checked_out = False

    def __str__(self):
        status = "in the library" if not self.checked_out else "checked out"
        return (f"Book is {self.title}.\n"
                f"Author is {self.author}\n"
                f"ISBN number is {self.isbn}\n"
                f"This book is {status}.")

class Member:
    def __init__(self, name):
        self.name = name
        self.member_id = randomNum()
        self.checkout_books = []

    def checkout_book(self, book):
        # Check if the book is not already checked out by the member
        if book not in self.checkout_books:
            if not book.checked_out:
                self.checkout_books.append(book)
                book.checkout()
                print(f"Book '{book.title}' checked out by {self.name}.")
            else:
                print(f"Book '{book.title}' is already checked out.")
        else:
            print(f"Book '{book.title}' is already checked out by the member.")
 
    def return_book(self, book):
        # Return the book only if it is in the member's checked-out list
        if book in self.checkout_books:
            self.checkout_books.remove(book)
            book.return_book()
            print(f"Book '{book.title}' returned by {self.name}.")
        else:
            print(f"Book '{book.title}' is not in the member's checked-out list.")

    def __str__(self):
        return (f"This is our member name: {self.name}\n"
                f"This is member id: {self.member_id}\n"
                f"These are member books: {[book.title for book in self.checkout_books]}")
    
class Library:
    def __init__(self):
        self.books = []
        self.members = []

    def add_book(self, book: Book):
        self.books.append(book)

    def remove_book(self, book: Book):
        self.books.remove(book)

    def register_member(self, member: Member):
        self.members.append(member)

    def remove_member(self, member: Member):
        self.members.remove(member)

    def __str__(self):
        return (f"Here are the all members {[member.name for member in self.members]}\n"
                f"Here are the all book titles {[book.title for book in self.books]} and book authors: {[book.author for book in self.books]}")

# Example usage

library = Library()

# Add books to the library
book1 = Book("White Book", "Burhan")
book2 = Book("Black", "Jack")
library.add_book(book1)
library.add_book(book2)

# Register members to the library
member1 = Member("Oliver")
member2 = Member("Kalid")
library.register_member(member1)
library.register_member(member2)

# Print initial library state
print(library)
print()

# Test cases
print("Test Cases:")

# Member 1 checks out book 1
member1.checkout_book(book1)
# Member 2 tries to check out the same book
member2.checkout_book(book1)

# Member 1 returns the book
member1.return_book(book1)
# Member 2 successfully checks out the book
member2.checkout_book(book1)

# Print final state
print()
print(library)
