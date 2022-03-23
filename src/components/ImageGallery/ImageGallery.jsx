import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} src={webformatURL} />
      ))}
    </ul>
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
