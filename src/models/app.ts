export interface IGetBooksQuerryParams {
  q: string;
  start: number;
  by: string;
  type: string;
}

export interface INameId {
  name: string;
  id: number;
}

export interface IErrorResponse {
  status: number | string;
}

export interface IResponse<T> {
  items: Array<T>;
  totalItems: number;
  error?: unknown;
}
