import {
  ImageGalleryImageStyle,
  ImageGalleryItemStyle,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ pictures, onClickImg }) => {
  return pictures.map(({ id, largeImageURL, webformatURL, tags }) => {
    return (
      <ImageGalleryItemStyle key={id}>
        <ImageGalleryImageStyle
          onClick={() => {
            onClickImg(largeImageURL);
          }}
          src={webformatURL}
          alt={tags}
        />
      </ImageGalleryItemStyle>
    );
  });
};

ImageGalleryItem.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClickImg: PropTypes.func.isRequired,
};
