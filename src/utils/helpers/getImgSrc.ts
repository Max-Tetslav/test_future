import { IBookImg } from '@models/store';

const getImgSrc = (img?: IBookImg) => {
  if (img?.thumbnail) {
    return img?.thumbnail;
  }

  return '';
};

export default getImgSrc;
