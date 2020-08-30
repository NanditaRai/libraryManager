/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Loader from '../../components/loader';
import { debounce } from '../../utils/debounce';
import {
  Container,
  HeaderContainer,
  searchInput
} from './styles';

interface Books {
  name: string,
  author: string,
  count: string,
  description: string,
  bookId: string,
}

type Props = {
  history: any[],
  getBookList: Function,
  isLoading: boolean,
  bookList: Books[],
}

const BookList = ({history, getBookList, isLoading, bookList} : Props) => {
  const [searchText, updateSearchText] = useState('');
  const [filteredBookList, updateFilteredBookList] = useState(bookList);

  useEffect(() => {
    getBookList();
  }, [getBookList]);

  useEffect(() => {
    updateFilteredBookList(bookList);
  }, [bookList])

  const onItemClick = ({bookId}) => {
    //open edit book screen
    history.push(`/book?bookid=${bookId}`);
  };

  const onAddClick = () => {
    const bookId = bookList.length + 1;
    history.push(`/book?bookid=${bookId}`);
  }

  const filterBookList = () => { 
    const filteredBooks = bookList.filter(book => book.name.toLowerCase().includes(searchText.toLowerCase())); 
    updateFilteredBookList(filteredBooks);
  }

  const debouncedSearch = debounce(filterBookList, 1000);

  useEffect(() => {
    if(searchText && searchText !== ' '){
      debouncedSearch();
    }else{
      updateFilteredBookList(bookList);
    }
  }, [bookList, debouncedSearch, searchText]);

  const onSearchTextEnter = (event) => {
    //update list
    const searchedQuery = event.target.value;
    updateSearchText(searchedQuery);
  }

  return(
    <Container>
      <HeaderContainer>
        <input
          css={searchInput}
          type="text"
          placeholder="Search by book name"
          defaultValue={searchText}
          onChange={onSearchTextEnter}
        />
        <Button onClick={onAddClick}>Add New Book</Button>
      </HeaderContainer>
      {filteredBookList.map((item, index) => (
        <Card 
          book={item}
          onItemClick={() => {
            onItemClick(item);
          }}/>
      ))}
      {isLoading && <Loader />}
    </Container>
  )
}

export default BookList;