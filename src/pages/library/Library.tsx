import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/index';
import { updateList } from '@store/reducers/books';
import booksApi from '@services/booksApi';
import BookList from '@components/containers/bookList/BookList';
import SpinFC from 'antd/lib/spin';
import cl from './Library.module.scss';

const Library = () => {
  const dispatch = useAppDispatch();

  const { search, sort, category, startIndex, list } = useAppSelector(
    (state) => state.books,
  );

  const {
    data: books,
    isFetching,
    refetch,
    isUninitialized,
  } = booksApi.useGetBooksQuery(
    { q: search, start: startIndex, by: sort, type: category },
    { skip: !search },
  );

  useEffect(() => {
    refetch();
  }, [search, sort, category, startIndex]);

  useEffect(() => {
    if (books?.items) {
      dispatch(updateList(books.items));
    }
  }, [books]);

  return (
    <div className={cl.container}>
      {isUninitialized && <p>Пусто</p>}
      {isFetching && <SpinFC />}
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
