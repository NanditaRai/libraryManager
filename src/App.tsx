import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxStore from "./reducers";
import thunk from "redux-thunk";

import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import BookList from "./screens/bookList";
import Book from "./screens/book";

const store = createStore(reduxStore, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={BookList} />
        <Route path="/book" component={Book} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
