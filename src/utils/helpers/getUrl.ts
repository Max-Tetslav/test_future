import { API_KEY, CATEGORY_LIST } from '../constants/app';

const getUrl = (q: string, start: number, by: string, type: string): string => {
  const base = `/?maxResults=30&printType=books&key=${API_KEY as string}`;

  let result = base;

  if (q) {
    result += `&q=${q}${
      type !== CATEGORY_LIST[0].name ? `+subject:${type}` : ''
    }`;
  }

  if (by) {
    result += `&orderBy=${by}`;
  }

  if (start) {
    result += `&startIndex=${start}`;
  }

  return result;
};

export default getUrl;
