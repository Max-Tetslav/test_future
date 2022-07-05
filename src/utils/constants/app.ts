import { INameId } from '@models/app';

export const API_KEY: string | undefined = process.env.REACT_APP_BOOKS_API_KEY;

export const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
export const PAGINATION_STEP = 30;

export const CATEGORY_LIST: INameId[] = [
  { name: 'All', id: 0 },
  { name: 'Art', id: 1 },
  { name: 'Biography', id: 2 },
  { name: 'Computers', id: 3 },
  { name: 'History', id: 4 },
  { name: 'Medical', id: 5 },
  { name: 'Poetry', id: 6 },
];

export const SORT_LIST: INameId[] = [
  {
    name: 'Relevance',
    id: 0,
  },
  {
    name: 'Newest',
    id: 1,
  },
];

export const MOCK_BOOK = {
  id: 'idj',
  volumeInfo: {
    authors: ['Иванов', 'Петров'],
    imageLinks: {
      thumbnail: 'source',
    },
    categories: ['Наука', 'Техника'],
    title: 'Книга',
    description: 'Описание',
  },
};
