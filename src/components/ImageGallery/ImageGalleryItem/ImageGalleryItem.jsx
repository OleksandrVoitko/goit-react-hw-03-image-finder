import PropTypes from "prop-types";

const ImageGalleryItem = ({ src }) => {
  return (
    <li>
      <img src={src} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
