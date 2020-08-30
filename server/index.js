const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3080;

// place holder for the data
const books = [
  {name: 'One', author: 'Nandita', bookId: '1', count: '0', description: ''},
  {name: 'Two', author: 'Garima', bookId: '2', count: '0', description: ''},
];

app.use(cors());
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../src/build')));

app.get('/booklist', (req, res) => {
  res.send(books);
})

app.get('/book', (req, res) => {
  const searchedBook = books.find(book => book.bookId === req.query.bookid)
  res.send(searchedBook ? searchedBook : {name: '', author: '', bookId: req.query.bookid, count: '', description: ''},);
})

app.post('/book', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.send(books);
})

app.put('/book', (req, res) => {
  const newBook = req.body;
  var foundIndex = books.findIndex(book => book.bookId === newBook.bookId);
  books[foundIndex] = newBook;
  res.send(books);
})

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../src/build/index.html'));
});


app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});