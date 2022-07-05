import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';
import {
  IGetBookQuerryParams,
  IGetBooksQuerryParams,
  IResponse,
} from '@models/app';
import { IBook } from '@models/store';
import getUrl from '@utils/helpers/getUrl';
import { BASE_URL } from '@utils/constants/app';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  keepUnusedDataFor: 0,
  endpoints: (build: EndpointBuilder<BaseQueryFn, string, string>) => ({
    getBooks: build.query<IResponse<IBook>, IGetBooksQuerryParams>({
      query: ({ q, start, by, type }) => ({
        url: getUrl(q, start, by, type),
      }),
    }),
    getBook: build.query<IBook, IGetBookQuerryParams>({
      query: ({ bookId }) => ({
        url: bookId,
      }),
    }),
  }),
});

export default booksApi;
