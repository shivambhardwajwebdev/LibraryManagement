const http = require("http");
const express = require("express");
const app = express();
app.use(express.json());
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { id: 6, title: "Moby Dick", author: "Herman Melville" },
  { id: 7, title: "War and Peace", author: "Leo Tolstoy" },
  { id: 8, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 9, title: "Brave New World", author: "Aldous Huxley" },
  { id: 10, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
];

const students = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    major: "Literature",
    year: "Sophomore",
  },
  {
    id: 2,
    name: "Brian Smith",
    email: "brian.smith@example.com",
    major: "History",
    year: "Junior",
  },
  {
    id: 3,
    name: "Cara Diaz",
    email: "cara.diaz@example.com",
    major: "Computer Science",
    year: "Senior",
  },
  {
    id: 4,
    name: "Daniel Lee",
    email: "daniel.lee@example.com",
    major: "Physics",
    year: "Freshman",
  },
  {
    id: 5,
    name: "Emily Clark",
    email: "emily.clark@example.com",
    major: "Philosophy",
    year: "Senior",
  },
  {
    id: 6,
    name: "Faisal Khan",
    email: "faisal.khan@example.com",
    major: "Mathematics",
    year: "Junior",
  },
  {
    id: 7,
    name: "Grace Park",
    email: "grace.park@example.com",
    major: "Biology",
    year: "Sophomore",
  },
  {
    id: 8,
    name: "Hiro Tanaka",
    email: "hiro.tanaka@example.com",
    major: "Engineering",
    year: "Senior",
  },
  {
    id: 9,
    name: "Isabella Rossi",
    email: "isabella.rossi@example.com",
    major: "Art",
    year: "Freshman",
  },
  {
    id: 10,
    name: "Jack O'Neil",
    email: "jack.oneil@example.com",
    major: "Economics",
    year: "Junior",
  },
];
const ok = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
    <style>
        /* Reset default margins and paddings */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #4facfe, #00f2fe);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            animation: fadeIn 1.5s ease-in-out;
        }

        p {
            font-size: 1.2rem;
            margin-bottom: 20px;
            animation: fadeIn 2s ease-in-out;
        }

        button {
            padding: 10px 20px;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            background-color: white;
            color: #4facfe;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        button:hover {
            background-color: #4facfe;
            color: white;
            transform: scale(1.05);
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>

    <h1 id="welcome-text">Welcome! to Our Library</h1>
    <p id="message">We’re glad to have you here. This is a place where you find book which makes you wisher , optimist and a stunning personality</p>
    

    <script>
        }
    </script>

</body>
</html>
`;
app.listen(8081, (req, res) => {
  console.log("everything is working fine at http://localhost:8081");
});
app.get("/", (req, res) => {
  res.status(200).send(`${ok}`);
});
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admininistration portal</title>
<style>
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #7b838a, #b6e5e8);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}
.card {
  font-family: Montserrat, sans-serif;
  width: 300px;
  height: 250px;
  translate: -6px -6px;
  background: #ff66a3;
  border: 3px solid #000000;
  box-shadow: 12px 12px 0 #000000;
  overflow: hidden;
  transition: all 0.3s ease;
}

.head {
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 900;
  width: 100%;
  height: 32px;
  background: #ffffff;
  padding: 5px 12px;
  color: #000000;
  border-bottom: 3px solid #000000;
}

.content {
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
}
.card:hover {
  translate: -6px;
}
</style>
</head>
<body>
<div class="card">
  <div class="head">Window</div>
  <div class="content">
    The book you are searching is ${book.title} and is writen by ${book.author}
  </div>
</div>
</body>
</html>
`);
});

app.get("/author/admin12/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book)
    return res.status(404).send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admininistration portal</title>
<style>
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #7b838a, #b6e5e8);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}
.card {
  font-family: Montserrat, sans-serif;
  width: 300px;
  height: 250px;
  translate: -6px -6px;
  background: #ff66a3;
  border: 3px solid #000000;
  box-shadow: 12px 12px 0 #000000;
  overflow: hidden;
  transition: all 0.3s ease;
}

.head {
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 900;
  width: 100%;
  height: 32px;
  background: #ffffff;
  padding: 5px 12px;
  color: #000000;
  border-bottom: 3px solid #000000;
}

.content {
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
}
.card:hover {
  translate: -6px;
}
</style>
</head>
<body>
<div class="card">
  <div class="head">Window</div>
  <div class="content">
    The book with id = ${id} is not available in our library
  </div>
</div>
</body>
</html>`
);
});
