import styles from './MainBottom.module.css'
import { MainBottomProps, infos } from './MainBottomProps'

const MainBottom = () => {
    return (
        <section className={styles.section}>
            <div className={styles.containerWrap}>
                {infos.map((info, index) => (
                    <MainBottomProps key={index} info={info} />
                ))}
            </div>
        </section>
    )
}

export default MainBottom