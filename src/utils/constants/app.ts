import { INameId } from '@models/app';

export const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;

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
