import styles from './Header.module.scss';
import logo from '../../../assets/images/cookchef_logo.png'
import { useState } from 'react';
import HeaderMenu from './components/HeaderMenu';

export default function Header(){

    const [showMenu, setShowMenu] = useState(false);

    return <div className={`${styles.header} d-flex flex-row align-items-center`}>
        {/* <i className="fa-solid fa-bars mr-15"></i> */}
        <div className='flex-fill'>
            <img src={logo} alt="" />
        </div>
        <ul className={styles.headerList}>
            <button className='mr-15 btn btn-reverse-primary'>
                <i className="fa-solid fa-heart mr-15"></i>
                <span>Wishlist</span>
            </button>
            <button className='btn btn-primary'>Connexion</button>
        </ul>
        <i 
            onClick={() => setShowMenu(!showMenu)}
            className={`fa-solid fa-bars ${styles.headerXs}`}>
        </i>
        {showMenu && (
        <>
            <div onClick={() => setShowMenu(false)} className="calc"></div>
            <HeaderMenu/>
        </>
        )}
    </div>
}