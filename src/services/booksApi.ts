import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';
import { IGetBooksQuerryParams, IResponse } from '@models/app';
import { IBook } from '@models/store';
import getUrl from '@utils/helpers/getUrl';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1/volumes',
  }),
  keepUnusedDataFor: 0,
  endpoints: (build: EndpointBuilder<BaseQueryFn, string, string>) => ({
    getBooks: build.query<IResponse<IBook>, IGetBooksQuerryParams>({
      query: ({ q, start, by, type }) => ({
        url: getUrl(q, start, by, type),
      }),
    }),
    getBook: build.query<IBook, { bookId: string }>({
      query: ({ bookId }) => ({
        url: bookId,
      }),
    }),
  }),
});

export default booksApi;
