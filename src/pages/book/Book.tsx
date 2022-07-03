import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { IErrorResponse } from '@models/app';
import booksApi from '@services/booksApi';
import AppError from '@components/common/appError/AppError';
import Spin from '@components/common/spin/Spin';
import BookContent from '@components/common/bookContent/BookContent';
import cl from './Book.module.scss';

const Book: FC = () => {
  const { id } = useParams();

  const { data, error, isFetching } = booksApi.useGetBookQuery({
    bookId: id as string,
  });

  return isFetching ? (
    <Spin loading={isFetching} />
  ) : (
    <div className={cl.container}>
      {error ? (
        <AppError code={(error as IErrorResponse).status} />
      ) : (
        <BookContent book={data} />
      )}
    </div>
  );
};

export default Book;
