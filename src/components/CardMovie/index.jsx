import { useNavigate } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa';

import styles from './index.module.scss'
import posterNotFound from '../../assets/poster_not_found.png'
import LikeMovie from '../LikeMovie';

const CardMovie = ({ movie }) => {
    const navigateTo = useNavigate();

    const handleClick = () => {
        navigateTo(`/detail/${movie.imdbID}`);
    };

    return (
        <div className={styles['card-block']} onClick={handleClick} style={{ cursor: 'pointer' }}>

            <div className={styles['movie-info']}>
                <div className={styles['like-movie']}>
                    <LikeMovie movie={movie} />
                </div>
                <div>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                </div>
            </div>
            <img src={movie.Poster != "N/A" ? movie.Poster : posterNotFound} alt={movie.Title} />
        </div>
    );
}

export default CardMovie