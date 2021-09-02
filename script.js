//adding books
let books = [[1, "Start with why", "Simon Sinek", 80.0, 13],
             [2, "But how do it know", "J. Clark Scott", 59.9, 22],
             [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
             [4, "Zero to One", "Peter Thiel", 45.0, 12],
             [5, "You don't know JS", "Kyle Simpson", 39.9, 9]
             ];

             //add a new book
             books[5] = [6, "Refactoring", "Martin Fowler", 66.5, 30];
             console.log(books[5]);

             //edit a book
            books[1][4] = 19;
            console.log(books[1]);

            //delete a book
            books.shift();

            //display books
            console.log(books);

