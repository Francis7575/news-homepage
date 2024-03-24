import styles from './MainRight.module.css'

type Info = {
    title: string;
    description: string;
}

const infos: Info[] = [
    {
        title: 'Hydrogen VS Electric Cars',
        description: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
        title: 'The Downsides of AI Artistry',
        description: 'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
        title: 'Is VC Funding Drying Up?',
        description: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
];

const MainRightProps: React.FC<{ info: Info }> = ({ info }) => {
    return (
        <div className={styles.container}>
            <h3>{info.title}</h3>
            <p className={styles.paragraph}>{info.description}</p>
        </div>
    );
}

export { MainRightProps, infos };
