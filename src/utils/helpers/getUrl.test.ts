import { SORT_LIST, CATEGORY_LIST } from '@utils/constants/app';
import getUrl from './getUrl';

const defaultArgs: [string, number, string, string] = [
  'string',
  0,
  SORT_LIST[0].name,
  CATEGORY_LIST[0].name,
];

describe('Get url from params', () => {
  test('default search', () => {
    const startIndexCheck = expect(
      getUrl(...defaultArgs).includes('startIndex'),
    );

    defaultArgs.forEach((item) => {
      const check = expect(getUrl(...defaultArgs).includes(String(item)));
      if (item === defaultArgs[1]) {
        startIndexCheck.toBeFalsy();
      }

      if (item === CATEGORY_LIST[0].name) {
        check.toBeFalsy();
      } else {
        check.toBeTruthy();
      }
    });
  });
});
