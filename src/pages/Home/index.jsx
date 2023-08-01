import React, { useEffect, useState } from 'react'

import { getLocalStorage, searchMovies } from '../../services/request'
import MovieSearch from '../../components/Search'
import CardMovie from '../../components/CardMovie';
import NotFoundMovies from '../../components/NotFoundMovies';
import LoadingMovies from '../../components/LoadingMovies';
import styles from './index.module.scss'


const Home = () => {
    const [movies, setMovies] = useState([])
    const [loading, setIsLoading] = useState([])
    const [isEmpty, setIsEmpty] = useState([])
    const [searchQuery, setSearchQuery] = useState(() => {
        const storedQuery = getLocalStorage('searchQuery');
        return storedQuery ? JSON.parse(storedQuery) : 'all';
    });



    const handleSearch = async (query) => {
        try {
            setIsLoading(true)
            const results = await searchMovies(query)
            setMovies(results)
            containMovies(results)
            setIsLoading(false)
        } catch (error) {
            console.log('error loading movies!')
        }
    };

    const containMovies = (movies) => {
        if (movies.length != 0) {
            setIsEmpty(false)
        } else {
            setIsEmpty(true)
        }
    };


    useEffect(() => {
        
        const loadMovies = async () => {
            try {
                setIsLoading(true)
                const results = await searchMovies(searchQuery)
                setMovies(results);
                containMovies(results)
                setIsLoading(false)
            } catch (error) {
                console.log('error loading movies!')
            }
        };

        loadMovies()
    }, [searchQuery]);

    return (
        <div className={styles['container-home']}>
            <div className={styles['content-search']}>
                <MovieSearch onSearch={handleSearch} />
            </div>
            {loading ? <LoadingMovies /> :
                <div className={styles['content']}>
                    {console.log(isEmpty)}
                    {isEmpty ? <NotFoundMovies /> :
                        movies.map((movie) => (
                            <CardMovie key={movie.imdbID} movie={movie} />
                        ))}
                </div>
            }
        </div>
    )
}

export default Home