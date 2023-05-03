import {
  ImageGalleryImageStyle,
  ImageGalleryItemStyle,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ pictures, onClickImg }) => {
  return pictures.map((picture, index) => {
    return (
      <ImageGalleryItemStyle key={index}>
        <ImageGalleryImageStyle
          onClick={() => {
            onClickImg(picture.largeImageURL);
          }}
          src={picture.webformatURL}
          alt={picture.tags}
        />
      </ImageGalleryItemStyle>
    );
  });
};

ImageGalleryItem.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
