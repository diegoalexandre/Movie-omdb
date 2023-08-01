import React from 'react'

import styles from './index.module.scss'
import loadingMovies from '../../assets/loader.gif'


const LoadingMovies = () => {
    return (
        <div className={styles['content-loading']}>
            <img src={loadingMovies} />
        </div>
    )
}

export default LoadingMovies