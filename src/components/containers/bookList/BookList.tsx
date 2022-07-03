import React, { FC, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@store/index';
import { updateStartIndex } from '@store/reducers/books';
import BookCard from '@components/common/bookCard/BookCard';
import AppButton from '@components/common/appButton/AppButton';
import cl from './BookList.module.scss';

export interface IBookListProps {
  loading: boolean;
}

const BookList: FC<IBookListProps> = ({ loading }) => {
  const dispatch = useAppDispatch();
  const { list, total } = useAppSelector((state) => state.books);

  const clickHandler = useCallback(() => {
    dispatch(updateStartIndex());
  }, []);

  return (
    <>
      <div className={cl.list}>
        {list.map((item) => (
          <BookCard book={item} key={item.id} />
        ))}
      </div>
      {/* В API какая-то ошибка. Каждый раз когда нажимаешь load more c новыми данными приходит увеличенное число total
          поэтому код ниже не отрабатывает, я хотел сделать чтобы, если число элементов в массиве равно total
          кнопка load more пропадает */}
      {total > list.length ? (
        <AppButton onClick={clickHandler} loading={loading}>
          Load more
        </AppButton>
      ) : null}
    </>
  );
};

export default BookList;
