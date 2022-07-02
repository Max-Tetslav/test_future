import React, { FC, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@store/index';
import { updateStartIndex } from '@store/reducers/books';
import BookCard from '@components/common/bookCard/BookCard';
import { Button } from 'antd';
import cl from './BookList.module.scss';

export interface IBookListProps {
  loading: boolean;
}

const BookList: FC<IBookListProps> = ({ loading }) => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.books.list);

  const clickHandler = useCallback(() => {
    dispatch(updateStartIndex());
  }, []);

  return (
    <div className={cl.list}>
      {list.map((item) => (
        <BookCard book={item} />
      ))}
      <Button onClick={clickHandler} loading={loading} type="primary">
        Load more
      </Button>
    </div>
  );
};

export default BookList;
