import PropTypes from "prop-types";
import {GalleryItem, GalleryItemImage} from "./ImageGalleryItem.styled"

const ImageGalleryItem = ({ src }) => {
  return (
    <GalleryItem>
      <GalleryItemImage src={src} alt="" />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
