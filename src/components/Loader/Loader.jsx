import Loader from 'react-loader-spinner';
import styles from '../styles.module.css'

const Spinner = () => {
    return (
        <div className={styles.Container}>
            <Loader
                type="ThreeDots"
                color="#711771"
                height={100}
                timeout={1100}
                width={100}
            />
        </div>
    );
};

export default Spinner;