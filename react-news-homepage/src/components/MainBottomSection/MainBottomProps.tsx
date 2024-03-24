import image1 from '../../assets/image-retro-pcs.png'
import image2 from '../../assets/image-top-laptops.png'
import image3 from '../../assets/image-gaming-growth.png'
import styles from './MainBottom.module.css'

type Props = {
    image: string,
    id: number,
    title: string,
    description: string
}

const infos: Props[] = [
    {
        image: image1,
        id: 1,
        title: 'Reviving Retro PCs',
        description: 'What happens when old PCs are given modern upgrades?'
    },
    {
        image: image2,
        id: 2,
        title: 'Top 10 Laptops of 2022',
        description: 'Our best picks for various needs and budgets.'
    },
    {
        image: image3,
        id: 3,
        title: 'The Growth of Gaming',
        description: 'How the pandemic has sparked fresh opportunities.'
    }
]

const MainBottomProps: React.FC<{ info: Props }> = ({ info }) => {

    const addLeadingZeros = (num: number, length: number): string => {
        return String(num).padStart(length, '0');
    };

    return (
        <div className={styles.container}>
            <img className={styles.image} src={info.image} alt="" />
            <div className={styles.textContainer}>
                <span className={styles.id}>{addLeadingZeros(info.id, 2)}</span>
                <h4 className={styles.title}>{info.title}</h4>
                <p className={styles.description}>{info.description}</p>
            </div>
        </div>
    )
}

export { MainBottomProps, infos }