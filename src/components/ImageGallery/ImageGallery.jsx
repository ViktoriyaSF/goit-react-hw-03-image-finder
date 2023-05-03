import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

import PropTypes from 'prop-types';

export const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ImageGalleryStyle>
      <ImageGalleryItem onClick={onClick} pictures={pictures} />
    </ImageGalleryStyle>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
