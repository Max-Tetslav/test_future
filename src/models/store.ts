export interface IBook {
  volumeInfo: {
    authors: string[];
    imageLinks: IBookImg;
    categories: string[] | undefined;
    title: string;
    description: string | undefined;
  };
  id: string;
}

export interface IBookImg {
  extraLarge: string | undefined;
  large: string | undefined;
  medium: string | undefined;
  small: string | undefined;
  smallThumbnail: string | undefined;
  thumbnail: string | undefined;
}

export interface IBookInitialState {
  list: IBook[];
  total: number;
  sort: string;
  category: string;
  search: string;
  startIndex: number;
}
