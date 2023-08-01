import LikeMovie from '../LikeMovie';
import percIcon from '../../assets/pecincon.svg'
import styles from './index.module.scss'


const InfoMovie = ({ movie }) => {

    return (
        <div className={styles['info-movie']}>
            <div className={styles['info-time']}>
                <p>{movie.Runtime} <span>.</span> {movie.Year} <span>.</span></p>
                <div className={styles['type-movie']}>
                    <p>{movie.Rated}</p>
                </div>
            </div>

            <h1>{movie.Title}</h1>

            <div className={styles['rating']}>
                <div className={styles['rating-imdb']}>
                    <div className={styles['box-log0-imdb']}>
                        <p>IMDb</p>
                    </div>
                    <p>{movie.imdbRating != 'N/A' ? movie.imdbRating : 0} / 10</p>
                </div>

                <div className={styles['vote-imdb']}>
                    <div className={styles['box-vote-imdb']}>
                        <img src={percIcon} alt="" />
                    </div>
                    <p>{movie.imdbRating != 'N/A' ? movie.imdbRating * 10 : 0}%</p>
                </div>

                <div className={styles['favorite']} >
                    <div className={styles['box-favorite']} >
                        <LikeMovie movie={movie} />
                    </div>
                    <p>Add to favorites</p>
                </div>
            </div>

            <div className={styles['content-plot']}>
                <h4>Plot</h4>
                <p>{movie.Plot}</p>
            </div>

            <div className={styles['content-segment']}>
                <div className={styles['cast']}>
                    <h4>Cast</h4>
                    {movie.Actors.split(',').map((actors, index) => (
                        <p key={index}>{actors}</p>
                    ))}
                </div>

                <div className={styles['genre']}>
                    <h4>Genre</h4>
                    {movie.Genre.split(',').map((genre, index) => (
                        <p key={index}>{genre}</p>
                    ))}
                </div>

                <div className={styles['director']}>
                    <h4>Director</h4>
                    <p>{movie.Director}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoMovie