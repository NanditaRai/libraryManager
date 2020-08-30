/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CardContainer, CardComponent } from './styles';

interface BookType {
  name: string,
  author: string,
  count: string,
  bookId: string,
  description: string,
}

type Props = {
  onItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  book: BookType
}

const Card = ({ book, onItemClick } : Props) => {
  const {name, author, count, bookId, description} = book;
 
  return (
    <CardContainer onClick={onItemClick}>
      <CardComponent>
        <div>Book ID</div>
        <div>:</div>
        <div>{bookId}</div>
      </CardComponent>
      <CardComponent>
        <div>Name</div>
        <div>:</div>
        <div>{name}</div>
      </CardComponent>
      <CardComponent>
        <div>Author</div>
        <div>:</div>
        <div>{author}</div>
      </CardComponent>
      <CardComponent>
        <div>Count</div>
        <div>:</div>
        <div>{count}</div>
      </CardComponent>
      <CardComponent>
        <div>Description</div>
        <div>:</div>
        <div>{description}</div>
      </CardComponent>
    </CardContainer>
  );
};

export default Card;
