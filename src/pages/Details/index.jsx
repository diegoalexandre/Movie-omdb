import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getDetails } from '../../services/request'
import NavBackBtn from '../../components/NavBackBtn'
import LoadingMovies from '../../components/LoadingMovies'
import InfoMovie from '../../components/InfoMovie'
import posterNotFound from '../../assets/poster_not_found.png'
import styles from './index.module.scss'




const MovieDetails = () => {
    const { imdbID } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setIsLoading] = useState([])


    useEffect(() => {
        const fetchMovieDetails = async () => {
            setIsLoading(true)
            const results = await getDetails(imdbID)
            setMovie(results)
            setIsLoading(false)
        };
        fetchMovieDetails();
    }, []);



    return (
        loading ? <LoadingMovies /> :
            <div className={styles['container-details']}>
                <NavBackBtn />
                <div className={styles['content']}>

                    <InfoMovie movie={movie} />

                    <div className={styles['poster']}>
                        {movie.Poster == "N/A" ? <img src={posterNotFound} alt={movie.Title} /> 
                        : <img src={movie.Poster} alt={movie.Title} />}
                    </div>
                </div>
            </div>
    )
}

export default MovieDetails