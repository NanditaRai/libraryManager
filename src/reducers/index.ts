import { combineReducers } from 'redux';
import {
  ACTION_INIT,
  ACTION_GET_LIST_SUCCESS,
  ACTION_GET_LIST_FAILURE,
  ACTION_GET_BOOK_SUCCESS,
  ACTION_GET_BOOK_FAILURE,
  ACTION_SAVE_BOOK_SUCCESS,
  ACTION_SAVE_BOOK_FAILURE,
  ACTION_EDIT_BOOK_SUCCESS,
  ACTION_EDIT_BOOK_FAILURE,
} from '../common/actions';

const INITIAL_STATE = {
  isLoading: false,
  bookList: [],
  selectedBook: {},
};

const book = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTION_INIT:
      return { ...state, isLoading: true };
    case ACTION_GET_LIST_SUCCESS:
      return {...state, isLoading: false, bookList: action.payload };
    case ACTION_GET_LIST_FAILURE:
      return {...state, isLoading: false, bookList: [] };
    case ACTION_GET_BOOK_SUCCESS:
      return {...state, isLoading: false, selectedBook: action.payload};
    case ACTION_GET_BOOK_FAILURE:
      return {...state, isLoading: false, selectedBook: {}};
    case ACTION_SAVE_BOOK_SUCCESS:
    case ACTION_EDIT_BOOK_SUCCESS:
      return {...state, isLoading: false, bookList: action.payload };
    case ACTION_SAVE_BOOK_FAILURE:
    case ACTION_EDIT_BOOK_FAILURE:
      return {...state, isLoading: false };
    default: 
      return state;
  }
};

export default combineReducers({
  book
});
