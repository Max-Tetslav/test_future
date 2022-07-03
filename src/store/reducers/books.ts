import { IBook, IBookInitialState } from '@models/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CATEGORY_LIST, SORT_LIST } from '@utils/constants/app';

const initialState: IBookInitialState = {
  list: [],
  total: 0,
  sort: SORT_LIST[0].name,
  category: CATEGORY_LIST[0].name,
  search: '',
  startIndex: 0,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    updateList: (state, action: PayloadAction<IBook[]>) => {
      if (state.startIndex === 0) {
        state.list = action.payload;
      } else {
        state.list = [...state.list, ...action.payload];
      }
    },
    clearList: (state) => {
      state.list = [];
    },
    updateTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    updateSearch: (state, action: PayloadAction<string>) => {
      if (state.startIndex > 0) {
        state.startIndex = 0;
      }

      if (state.search !== action.payload) {
        state.list = [];
        state.search = action.payload;
      }
    },
    updateSort: (state, action: PayloadAction<string>) => {
      if (state.startIndex > 0) {
        state.startIndex = 0;
      }

      if (state.search !== action.payload) {
        state.list = [];
        state.sort = action.payload;
      }
    },
    updateCategory: (state, action: PayloadAction<string>) => {
      if (state.startIndex > 0) {
        state.startIndex = 0;
      }

      if (state.search !== action.payload) {
        state.list = [];
        state.category = action.payload;
      }
    },
    updateStartIndex: (state) => {
      state.startIndex += 30;
    },
  },
});

export const {
  updateSearch,
  updateSort,
  updateCategory,
  updateStartIndex,
  updateList,
  clearList,
  updateTotal,
} = booksSlice.actions;

export default booksSlice.reducer;
