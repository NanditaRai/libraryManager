/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Toaster from '../../components/Toaster';
import Loader from '../../components/loader';

import {
  Container,
  Holder,
  marginBottom20,
  marginRight10,
  marginTop20
} from './styles';

import { formInput } from '../../common/styles';

interface BookType {
  name: string,
  author: string,
  count: string,
  description: string,
  bookId: string,
}

type Props = {
  isLoading: boolean,
  selectedBook: BookType,
  getBook: Function,
  editBook: Function,
  addBook: Function,
}

const Book = ({isLoading, selectedBook, getBook, editBook, addBook} : Props) => {

  const receivedBookId = window.location.href.split('?')[1]?.split('=')[1];

  const [bookDetail, updateBookDetail] = useState({
    name: '',
    author: '',
    bookId: receivedBookId,
    count: '',
    description: '',
  });

  const [toastMessage, setToastMessage] = useState<string[]>([] as string[]);
 
  useEffect(() => {
    if(receivedBookId){
      getBook(receivedBookId);
    }
  }, [getBook, receivedBookId]);

  useEffect(() => {
    updateBookDetail({ ...bookDetail, ...selectedBook})
  }, [selectedBook]);


  const showToaster = (message: string[]) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage([]);
    }, 1500);
  };


  const checkValidation = () => {
    const errorMessage = [];
    if (bookDetail.name === '') {
      errorMessage.push('Book name is mandatory');
    }
    if (bookDetail.author === '') {
      errorMessage.push('Author name is mandatory');
    }
    if (bookDetail.count === '') {
      errorMessage.push('Please enter count');
    }

    if (errorMessage?.length) {
      showToaster(errorMessage);
      return {
        proceed: false,
      };
    }
    return {
      proceed: true,
    };
  }

  const onSave = () => {
    const { proceed } = checkValidation();

    if(proceed){
      if(selectedBook.name){
        //edit the existing book
        editBook(bookDetail);
      }else {
        //add new book
        addBook(bookDetail)
      }
      goBack();
    }
  }

  const goBack = () => {
    window.history.back();
  }

  const updateDetail = (event) => {
    const value = event.target.value;
    const key = event.target.getAttribute('data-type');
    updateBookDetail({ ...bookDetail, [key]: value })
  }

  return(
    <div>
    <Container>
      <Holder>
         <div css={marginBottom20}>Book ID: {receivedBookId}</div>
         <div>Name</div>
         <input
          css={formInput}
          type="text"
          placeholder="Enter book name"
          defaultValue={bookDetail.name}
          data-type="name"
          onBlur={updateDetail}
        />
         <div>Author</div>
         <input
          css={formInput}
          type="text"
          placeholder="Enter author name"
          defaultValue={bookDetail.author}
          data-type="author"
          onBlur={updateDetail}
        />
        <div>Count</div>
         <input
          css={formInput}
          type="number"
          placeholder="Enter count"
          defaultValue={bookDetail.count}
          data-type="count"
          onBlur={updateDetail}
        />
        <div>Description</div>
         <input
          css={formInput}
          type="text"
          placeholder="Enter Description"
          defaultValue={bookDetail.description}
          data-type="description"
          onBlur={updateDetail}
        />
      </Holder>
      <div css={marginTop20}>
        <Button onClick={goBack}>Go back</Button>
        <span css={marginRight10} />
        <Button onClick={onSave}>{selectedBook.name ? 'Update' : 'Add'}</Button>
      </div>
    </Container>
    <Toaster showToast={toastMessage.length > 0} text={toastMessage} />
    {isLoading && <Loader />}
    </div>
  )
}

export default Book;