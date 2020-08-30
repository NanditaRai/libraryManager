const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3080;

// place holder for the data
const books = [
  {name: 'To Kill a Mockingbird', author: 'Harper Lee', bookId: '1', count: '1200', description: 'The novel examines racism in the American South through the innocent wide eyes of a clever young girl named Jean Louise (“Scout”) Finch'},
  {name: 'The Great Gatsby', author: 'F. Scott Fitzgerald’', bookId: '2', count: '1000', description: 'The Great Gatsby provides an insider’s look into the Jazz Age of the 1920s in United States history while at the same time critiquing the idea of the “American Dream.”'},
  {name: 'A Passage to India', author: 'E.M. Forster', bookId: '3', count: '1600', description: 'The book was published in 1924 and follows a Muslim Indian doctor named Aziz and his relationships with an English professor, Cyril Fielding, and a visiting English schoolteacher named Adela Quested'},
];

app.use(cors());
app.use(bodyParser.json());

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