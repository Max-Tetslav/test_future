export interface IBook {
  volumeInfo: {
    authors: string[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    categories: string[] | undefined;
    title: string;
  };
  id: string;
}

export interface IBookInitialState {
  list: IBook[];
  sort: string;
  category: string;
  search: string;
  startIndex: number;
}

export interface IResponse<T> {
  items: Array<T>;
  totalItems: number;
  error?: unknown;
}
