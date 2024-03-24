import { MainRightProps, infos } from './MainRightProps'
import styles from './MainRight.module.css'

const MainRight = () => {
    return (
        <div className={styles.asideWrapper}>
            <aside>
                <div className={styles.asideContainer}>
                    <h2>New</h2>
                    {infos.map((info, index) => (
                        <MainRightProps key={index} info={info} />
                    ))}
                </div>
            </aside>
        </div>
    );
}

export default MainRight;
