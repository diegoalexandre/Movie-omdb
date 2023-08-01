import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getDetails } from '../../services/request'
import NavBackBtn from '../../components/NavBackBtn'
import LoadingMovies from '../../components/LoadingMovies'

import styles from './index.module.scss'
import InfoMovie from '../../components/InfoMovie'



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
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                </div>
            </div>
    )
}

export default MovieDetails