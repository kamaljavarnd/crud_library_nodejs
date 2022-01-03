Book APIs:


Retrieve all books
GET: http://localhost:8000/api/books/



Retrieve book by id
GET: http://localhost:8000/api/books/:id 




Create a new Book
POST: http://localhost:8000/api/books/

{
    "title":"Book Of Goodness",
    "description": "Learn the Fundamental Truths for Goodness",
    "author": "Kim"
}




Update an Existing Book
PUT: http://localhost:8000/api/books/:id


{
    "title":"Book Of Goodness",
    "description": "I'm Changing the content here!!",
    "author": "Vin"
}

Delete book by id
DELETE: http://localhost:8000/api/books/:id 

