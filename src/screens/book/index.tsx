import { connect } from 'react-redux';
import Book from './Book';
import { editBook, addBook, getBook } from '../../actions/book';

interface BookReducer {
  isLoading: Boolean,
  selectedBook: Object,
}
type Props = {
  book: BookReducer
}

const mapStateToProps = ({ book }: Props) => {
  const {
    isLoading, selectedBook,
  } = book;
  return {
    isLoading,
    selectedBook
  };
};
export default connect(mapStateToProps, {
  editBook,
  addBook,
  getBook
})(Book);