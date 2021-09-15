import PropTypes from 'prop-types';
import styles from '../styles.module.css'

const Button = ({ showModal, onClickButton }) => {
    !showModal && window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });

    return (
        <div className={styles.Container}>
            <button
                className={styles.Button}
                type='button'
                onClick={onClickButton}
            >
                Load more
            </button>
        </div>
    )
};

Button.propTypes = {
    onClickButton: PropTypes.func.isRequired,
}

export default Button;