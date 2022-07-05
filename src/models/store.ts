export interface IBook {
  volumeInfo: {
    authors: string[];
    imageLinks: IBookImg;
    categories?: string[];
    title: string;
    description?: string;
  };
  id: string;
  etag: string;
}

export interface IBookImg {
  extraLarge?: string;
  large?: string;
  medium?: string;
  small?: string;
  smallThumbnail?: string;
  thumbnail?: string;
}

export interface IBookInitialState {
  list: IBook[];
  total: number;
  sort: string;
  category: string;
  search: string;
  startIndex: number;
}

export type TAction<T> = (payload: T) => { payload: T; type: string };
