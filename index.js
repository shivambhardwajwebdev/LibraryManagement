const http = require("http");
const express = require("express");
const app = express();
const fs=require("fs");
let books =require("./book.json");
let users = require("./users.json");
const path = require("path");
const filePath = path.join(__dirname, "users.json");
const today = new Date();

console.log(today)
// Format as YYYY-MM-DD
const Currdate = today.toISOString().split('T')[0];
console.log(Currdate);


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
  const book =books.find(b=>b.id===id);
  const bookID =book.id;
//   (!user) ? (res.status(404).send("User not Found")

// ):(()=>{res.status(200).send(user);(user.returnDate>Currdate)?(`you have not returned ${book.name} it will charge you panelty of $100`):("");})
if(user){
  if(Date(user.returnDate)>Date(Currdate)){
    res.status(200).send(`${JSON.stringify(user)} , Hello ${user.name} , you have not returned the ${JSON.stringify(book)} on time . we will charge you panelty of $100 .`);
  }
  else{
    res.status(200).send(`${JSON.stringify(user)} , Hello There Hope you are enjoying ${JSON.stringify(book)} . its return date is ${user.returnDate} . return it on time to avoid panelty`)
  }
}else{
  res.status(404).send("User not found");
}
})

//creating a new user
app.post('/users/new/',(req,res)=>{
const {id,name,surname,email,subscriptionType,subscriptionDate}=req.body;
const user = users.find(each=>each.id===id)
if(!id||!name||!surname||!email||!subscriptionDate||!subscriptionType){
  res.status(200).json({
    success:true,
    message:"please provide all the fields"
  })
}else{
  if(user){
    res.status(200).json({
      success:false,
      message:"User with this id already exist"
    })
  }else{
    users.push(req.body);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    res.status(201).json({
      success:true,
      message:"User create Successfully"
    })
    
  }
}
})