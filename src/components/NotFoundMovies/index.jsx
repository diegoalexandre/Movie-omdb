import styles from './index.module.scss'
import moviesNotFound from '../../assets/movies_not_found.png'


const NotFoundMovies = () => {
    return (
        <div className={styles['content-not-found']}>
            <img src={moviesNotFound} alt="Here's an offer you can't refuse" />
            <h2>Don't know what to search?</h2>
            <p>Here's an offer you can't refuse</p>
        </div>
    )
}

export default NotFoundMovies