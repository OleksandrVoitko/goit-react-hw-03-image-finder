import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} src={webformatURL} />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
