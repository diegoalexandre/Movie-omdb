import { useEffect, useState } from 'react'
import { FaSistrix } from 'react-icons/fa';

import styles from './index.module.scss'
import { getLocalStorage, setLocalStorage } from '../../services/request';

const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState(() => {
        const storedQuery = getLocalStorage('searchQuery');
        return storedQuery ? JSON.parse(storedQuery) : [];
    });

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        setLocalStorage('searchQuery', JSON.stringify(searchQuery))
    }, [searchQuery]);

    return (
        <div className={styles['search-container']}>
            <div className={styles['search-icon']}>
                <FaSistrix className={styles['icon-sistrix']} />
            </div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Search movies...'
            />
        </div>
    );
}

export default Search