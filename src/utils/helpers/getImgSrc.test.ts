import getImgSrc from './getImgSrc';

const imgObj = {
  thumbnail: 'source',
};

describe('Get image source from object', () => {
  test('source exists', () => {
    expect(getImgSrc(imgObj)).toEqual(imgObj.thumbnail);
    expect(getImgSrc(imgObj)).not.toEqual('');
  });

  test('source not exists', () => {
    expect(getImgSrc({})).toEqual('');
  });
});
