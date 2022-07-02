import React from 'react';
import { useParams } from 'react-router-dom';
import booksApi from '@services/booksApi';
import SpinFC from 'antd/lib/spin';

const Book = () => {
  const { id } = useParams();

  const { data, isFetching } = booksApi.useGetBookQuery({
    bookId: id as string,
  });

  return (
    <div>
      {isFetching ? (
        <SpinFC />
      ) : (
        <>
          <img src={data?.volumeInfo.imageLinks.thumbnail} alt="" />
          <h2>{data?.volumeInfo.title}</h2>
          <p>
            {data?.volumeInfo.authors
              ? data?.volumeInfo.authors.join(', ')
              : ''}
          </p>
          <p>
            {data?.volumeInfo.categories ? data?.volumeInfo.categories[0] : ''}
          </p>
        </>
      )}
    </div>
  );
};

export default Book;
