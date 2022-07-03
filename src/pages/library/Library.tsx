import React, { FC, useEffect } from 'react';
import { IErrorResponse } from '@models/app';
import { useAppDispatch, useAppSelector } from '@store/index';
import { clearList, updateList, updateTotal } from '@store/reducers/books';
import booksApi from '@services/booksApi';
import BookList from '@components/containers/bookList/BookList';
import Spin from '@components/common/spin/Spin';
import AppError from '@components/common/appError/AppError';
import cl from './Library.module.scss';

const Library: FC = () => {
  const dispatch = useAppDispatch();

  const { search, sort, category, startIndex, list } = useAppSelector(
    (state) => state.books,
  );

  const {
    data: books,
    error,
    isFetching,
    refetch,
    isUninitialized,
  } = booksApi.useGetBooksQuery(
    { q: search, start: startIndex, by: sort, type: category },
    { skip: !search },
  );

  useEffect(() => {
    dispatch(clearList());
  }, []);

  useEffect(() => {
    refetch();
  }, [search, sort, category, startIndex]);

  useEffect(() => {
    if (books?.items) {
      dispatch(updateList(books.items));
      dispatch(updateTotal(books.totalItems));
    }
  }, [books]);

  return (
    <div className={cl.container}>
      {isUninitialized && <p className={cl.empty}>Пусто</p>}
      {isFetching && <Spin className={cl.spin} />}
      {error && <AppError code={(error as IErrorResponse).status} />}
      {list.length ? (
        <>
          <h2>Found {books?.totalItems} results</h2>
          <BookList loading={isFetching} />
        </>
      ) : null}
    </div>
  );
};

export default Library;
