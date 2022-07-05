import { IBookImg } from '@models/store';

const getImgSrc = (img?: IBookImg): string => {
  if (img?.thumbnail) {
    return img?.thumbnail;
  }

  return '';
};

export default getImgSrc;
