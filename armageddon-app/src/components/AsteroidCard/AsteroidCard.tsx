import styles from "./Card.module.css"
import {AsteroidCardAction} from "./Action/AsteroidCardAction.tsx"
import {AsteroidCardContent} from "./Content/AsteroidCardContent.tsx"
import {AsteroidCardImage} from "./Image/AsteroidCardImage.tsx"

type AsteroidCardProps = {
    name: string;
    date: string;
    distance: {
        kilometer: number;
        lunar: number;
    },
    size: number; 
    isDangerous: boolean; 
    DistanceMode: boolean;
}

export const AsteroidCard = (props: AsteroidCardProps) =>{
    const {name, date, distance, size, isDangerous, DistanceMode} = props;

    return (<div className={styles.card}>
        <div className={isDangerous ? styles.cardRed : styles.cardRegular}><AsteroidCardImage />
            <AsteroidCardContent name={name} date={date} distance={distance} size={size} DistanceMode={DistanceMode}/>
            <AsteroidCardAction isDangerous={isDangerous}/></div>
    </div>)
}