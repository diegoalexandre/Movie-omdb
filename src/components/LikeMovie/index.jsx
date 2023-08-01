import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useEffect, useState } from 'react'

import { getLocalStorage, setLocalStorage } from '../../services/request'


const LikeMovie = ({ movie }) => {
    const [favorites, setLike] = useState(() => {
        const storedFavorites = getLocalStorage('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    const handleClick = () => {
        if (favorites.includes(movie.imdbID)) {
            setLike(favorites.filter((id) => id !== movie.imdbID));
        } else {
            setLike([...favorites, movie.imdbID]);
        }
    };

    useEffect(() => {
        setLocalStorage('favorites', JSON.stringify(favorites))
    }, [favorites]);

    const isFavorite = favorites.includes(movie.imdbID);

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            {isFavorite ? <FaHeart style={{color: '#FF9B39'}} /> : <FaRegHeart />}
        </div>
    )
}

export default LikeMovie