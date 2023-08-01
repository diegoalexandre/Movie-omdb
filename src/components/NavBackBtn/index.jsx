import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

import styles from './index.module.scss'


const NavBackBtn = () => {
    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo(-1)
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            <FaArrowLeft className={styles['icon-arrow-left']} />
        </div>
    )
}

export default NavBackBtn