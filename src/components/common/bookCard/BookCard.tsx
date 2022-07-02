import { IBook } from '@models/store';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import cl from './BookCard.module.scss';

export interface IBookCardProps {
  book: IBook;
}

const BookCard: FC<IBookCardProps> = ({ book }) => {
  const {
    id,
    volumeInfo: { title, authors, categories, imageLinks },
  } = book;

  return (
    <Link className={cl.card} to={id}>
      <img
        className={cl.img}
        src={imageLinks ? imageLinks.smallThumbnail : ''}
        alt={title}
      />
      <p className={cl.category}>{categories ? categories[0] || '' : ''}</p>
      <p className={cl.title}>{title}</p>
      <p className={cl.author}>{authors ? authors[0] || '' : ''}</p>
    </Link>
  );
};

export default BookCard;
