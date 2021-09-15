
import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem";
import styles from '../styles.module.css'

const ImageGallery = ({ images, onClickImage }) => (
    <ul className={styles.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (

            <ImageGalleryItem key={id} webformatImage={webformatURL} onClickImage={() => onClickImage(largeImageURL)} />
        ))}
    </ul>
);

ImageGallery.propTypes = {
    onClickImage: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default ImageGallery;