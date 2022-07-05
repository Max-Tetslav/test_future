import React, { FC } from 'react';
import { IBook } from '@models/store';
import getImgSrc from '@utils/helpers/getImgSrc';
import cl from './BookContent.module.scss';

export interface IBookContentProps {
  book: IBook | undefined;
}

const BookContent: FC<IBookContentProps> = ({ book }) => {
  return (
    <>
      <div className={cl.imgBox}>
        <img
          className={cl.img}
          src={getImgSrc(book?.volumeInfo.imageLinks)}
          alt="cover"
        />
      </div>
      <div className={cl.infoBox}>
        <p className={cl.category}>
          {book?.volumeInfo.categories
            ? book?.volumeInfo.categories.join(', ')
            : 'No category'}
        </p>
        <h2 className={cl.title}>{book?.volumeInfo.title}</h2>
        <p className={cl.author}>
          <i>
            {book?.volumeInfo.authors
              ? book?.volumeInfo.authors.join(', ')
              : ''}
          </i>
        </p>
        <div className={cl.descBox}>
          <p className={cl.description}>
            {book?.volumeInfo.description || 'No description'}
          </p>
        </div>
      </div>
    </>
  );
};

export default React.memo(BookContent);
