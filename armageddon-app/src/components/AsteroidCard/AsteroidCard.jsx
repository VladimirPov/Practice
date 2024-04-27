import styles from "./Card.module.css"
import {AsteroidCardAction} from "./Action/AsteroidCardAction"
import {AsteroidCardContent} from "./Content/AsteroidCardContent"
import {AsteroidCardImage} from "./Image/AsteroidCardImage"

export const AsteroidCard = (props) =>{
    const {name, date, distance, size, isDangerous, DistanceMode} = props;

    return (<div className={styles.card}>
        <div className={isDangerous ? styles.cardRed : styles.cardRegular}><AsteroidCardImage />
            <AsteroidCardContent name={name} date={date} distance={distance} size={size} DistanceMode={DistanceMode}/>
            <AsteroidCardAction isDangerous={isDangerous}/></div>
    </div>)
}