import styles from './Header.module.scss';
import logo from '../../assets/images/cookchef_logo.png'

export default function Header(){
    return <div className={`${styles.header} d-flex flex-row align-items-center`}>
        <i className="fa-solid fa-bars mr-15"></i>
        <div className='flex-fill'>
            <img src={logo} alt="" />
        </div>
        <ul>
            <button className='mr-15 btn btn-reverse-primary'>
                <i className="fa-solid fa-basket-shopping mr-15"></i>
                <span>Panier</span>
            </button>
            <button className='btn btn-primary'>Connexion</button>
        </ul>
    </div>
}