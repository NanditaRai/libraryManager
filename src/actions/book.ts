import {
  ACTION_INIT,
  ACTION_GET_LIST_SUCCESS,
  ACTION_GET_LIST_FAILURE,
  ACTION_GET_BOOK_SUCCESS,
  ACTION_GET_BOOK_FAILURE,
  ACTION_SAVE_BOOK_SUCCESS,
  ACTION_SAVE_BOOK_FAILURE,
  ACTION_EDIT_BOOK_SUCCESS,
  ACTION_EDIT_BOOK_FAILURE
} from "../common/actions";

import callApi from "../web/worker";
import config from "../web/apiConfig";

export const getBookList = () => async (dispatch : Function) => {
  dispatch({ type: ACTION_INIT });
  try {
    const response = await callApi(config.getList);
    dispatch({
      type: ACTION_GET_LIST_SUCCESS,
      payload: response && response.length > 0 ? response : []
    });
  } catch (error) {
    dispatch({ type: ACTION_GET_LIST_FAILURE, payload: error });
  }
};

export const getBook = (bookID : string) => async (dispatch : Function) => {
  dispatch({ type: ACTION_INIT });
  try {
    const bookConfig = { ...config.getBook };
    bookConfig.endPoint = `${bookConfig.endPoint}?bookid=${bookID}`;
    const response = await callApi(bookConfig);
    dispatch({
      type: ACTION_GET_BOOK_SUCCESS,
      payload: response ? response : {}
    });
  } catch (error) {
    dispatch({ type: ACTION_GET_BOOK_FAILURE, payload: error });
  }
};

export const editBook = (book : Object) => async (dispatch : Function) => {
  dispatch({ type: ACTION_INIT });
  try {
    const response = await callApi(config.editBook, book);
    dispatch({
      type: ACTION_EDIT_BOOK_SUCCESS,
      payload: response && response.length > 0 ? response : []
    });
  } catch (error) {
    dispatch({ type: ACTION_EDIT_BOOK_FAILURE, payload: error });
  }
};

export const addBook = (book : Object) => async (dispatch : Function) => {
  dispatch({ type: ACTION_INIT });
  try {
    const response = await callApi(config.addBook, book);
    dispatch({
      type: ACTION_SAVE_BOOK_SUCCESS,
      payload: response && response.length > 0 ? response : []
    });
  } catch (error) {
    dispatch({ type: ACTION_SAVE_BOOK_FAILURE, payload: error });
  }
};
