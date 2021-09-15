
import PropTypes from 'prop-types';
import styles from '../styles.module.css'

const ImageGalleryItem = ({ webformatImage, onClickImage }) => (
    <li
        className={styles.ImageGalleryItem}
        onClick={onClickImage}>

        <img
            className={styles.ImageGalleryItemImage}
            src={webformatImage}
            alt="" />
    </li>
)

ImageGalleryItem.propTypes = {
    webformatImage: PropTypes.string.isRequired,
    onClickImage: PropTypes.func.isRequired,
}

export default ImageGalleryItem;