import styles from './Menu.module.css';
import OpenMenu from '../../assets/open-menu.svg';
import CloseMenu from '../../assets/close-menu.svg';
import { useState } from 'react';

const Menu = () => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    const handleToggleMenu = () => {
        const isOpen = !isMenuOpened;
        document.body.style.backgroundColor = isOpen ? 'rgba(0, 0, 26, 0.5)' : '#FFFDFA';
        setIsMenuOpened(isOpen);
    };

    return (
        <nav>
            <div className={`${styles.menuBackground} ${isMenuOpened ? styles.showMenu : styles.hideMenu}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                </ul>
            </div>

            <div className={styles.menuIcons}>
                <img
                    src={isMenuOpened ? CloseMenu : OpenMenu}
                    alt="Menu Icon"
                    className={isMenuOpened ? styles.closeMenu : styles.openMenu}
                    onClick={handleToggleMenu}
                />
            </div>
        </nav>
    );
};

export default Menu;
