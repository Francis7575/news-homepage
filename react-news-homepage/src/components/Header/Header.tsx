import Logo from '../../assets/logo.svg'
import styles from './Header.module.css'
import Menu from '../Menu/Menu'

const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <img className={styles.logo} src={Logo} alt="Homepage Logo" />
                <Menu />
            </div>
        </header>
    )
}

export default Header