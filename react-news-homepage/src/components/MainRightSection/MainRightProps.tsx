import styles from './MainRight.module.css'

type Info = {
    description: string,
    heading: string,
    link: string
}

const infos: Info[] = [
    {
        heading: 'Hydrogen VS Electric Cars',
        link: '#',
        description: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
        heading: 'The Downsides of AI Artistry',
        link: '#',
        description: 'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
        heading: 'Is VC Funding Drying Up?',
        link: '#',
        description: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
];

const MainRightProps: React.FC<{ info: Info }> = ({ info }) => {
    return (
        <div className={styles.container}>
            <ul style={{ marginBottom: '.5rem' }}>
                <li>
                    <a className={styles.link} href={info.link}>{info.heading}</a>
                </li>
            </ul>
            <p className={styles.paragraph}>{info.description}</p>
        </div>
    );
}

export { MainRightProps, infos };
