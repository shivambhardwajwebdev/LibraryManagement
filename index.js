const http = require("http");
const express = require("express");
const app = express();
const fs=require("fs");
let books =require("./book.json")
let users = require("./users.json")
app.use(express.json());
app.listen(8081,(req,res)=>{
  console.log(`Server is running at http://localhost:8081`);
})
app.get('/books/:id',(req,res)=>{
  let id=parseInt(req.params.id);
  const book = books.find(b=>b.id===id);
  (!book) ? (res.status(404).send("Book not found")) : (res.status(200).send(book))
})
app.get('/users/:id',(req, res)=>{
  let id = parseInt(req.params.id);
  const user = users.find(u=>u.id===id);
  (!user) ? (res.status(404).send("User not Found")):(res.status(200).send(user))
})