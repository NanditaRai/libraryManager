import { connect } from 'react-redux';
import BookList from './BookList';
import { getBookList } from '../../actions/book';

interface Books {
  name: string,
  author: string,
  count: string,
  description: string,
  bookId: string,
}

interface BookReducer {
  isLoading: Boolean,
  bookList: Books[],
}
type Props = {
  book: BookReducer
}

const mapStateToProps = ({ book }: Props) => {
  const {
    isLoading, bookList,
  } = book;
  return {
    isLoading,
    bookList
  };
};
export default connect(mapStateToProps, {
  getBookList,
})(BookList);