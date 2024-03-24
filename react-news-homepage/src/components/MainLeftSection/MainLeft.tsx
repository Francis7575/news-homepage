import mainImageMobile from '../../assets/image-web-3-mobile.jpg';
import mainImageDesktop from '../../assets/image-web-3-desktop.jpg'
import styles from './MainLeft.module.css';
import MainRight from '../MainRightSection/MainRight';
import MainBottom from '../MainBottomSection/MainBottom';

const MainLeft = () => {
    return (
        <main>
            <div className={styles.container}>
                <section className={styles.section}>
                    <img className={styles.mainImageMobile} src={mainImageMobile} alt="" />
                    <img className={styles.mainImageDesktop} src={mainImageDesktop} alt="" />
                    <div className={styles.brightContainer}>
                        <h1>The Bright Future of Web 3.0?</h1>
                        <div className={styles.paragraphContainer}>
                            <p className={styles.paragraph}>
                                We dive into the next evolution of the web that claims to
                                put the power of the platforms back into the hands of the
                                people. But is it really fulfilling its promise?
                            </p>
                            <button id={styles.readMoreBtn}>Read More</button>
                        </div>
                    </div>
                </section>
                <MainRight />
            </div>
            <MainBottom />
        </main>
    );
}

export default MainLeft;
