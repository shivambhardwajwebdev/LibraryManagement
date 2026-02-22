This is a library Management API Beckend for the Management of Users and the books .

# Routes and the Endpoint

## /users
GET : all the list of users in the system.
POST : New user registration
## /users/{id}
Get a user by their ID
PUT : Updating a user by their ID 
DELETE : Deleting a user by their ID 
Check id user have 1) Issued boook or Panelty

## subscription/{id}
GET: get a user subscription details by their ID
=>Date of subscription
=> Valid till ?
=> fine if any ?

## /books 
GET : Get all the books in  the system 
POST : Add a bew book to the system 

## /books/{id}
GET: Get a book by its ID
PUT : update book
DELETE : Delete a book by its ID

## /books/issued 
GET : Get all all the issued books

##  books/issued/with fine
GET : Get all issued books with thier fine amount

## subscription TYPES
>>Basic 3 month
.. standard 6 month
>>Premium 12 months
  
## user panelty 
>> user pay 100$ for delay >> 100$ for subsciption expired >> pay 200$ for both

## start the application by npm init
 npm i express - required dependencies for both dev and client

 npm i nodemon - required dependencies for only dev
 npm i nodemon --save -dev in package.json 

 mention start and dev in script of package.json

## start writing in index.js


 