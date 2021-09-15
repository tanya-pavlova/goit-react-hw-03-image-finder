
import { Component } from 'react';
import styles from '../styles.module.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
    state = {

        searchName: '',
    };

    handleQueryChange = event => {
        this.setState({ searchName: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {

        event.preventDefault();

        if (this.state.searchName.trim() === '') {
            toast.error('Вы ничего не ввели');
        }
        this.props.onSubmit(this.state.searchName);
        this.setState({ searchName: '' });
    }

    render() {
        return (
            <div className={styles.Searchbar}>
                <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchFormButton}>
                        <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={styles.SearchFormInput}
                        type="text"
                        name="searchName"
                        value={this.state.searchName}
                        onChange={this.handleQueryChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </div>
        )
    }
}