import {Link} from "react-router-dom"
import styles from "./Header.module.css"

export const Header = () => {
    return <div className={styles.conteiner}>
        <div>
            <h1>Armagedon V</h1>
            <h3>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</h3>
            <div className={styles.linkConteiner}>
                <div className={styles.linkOne}><Link to={"/asteroids"}>Астероиды</Link></div>
                <div className={styles.linkOne}><Link to={"/destroyment"}>Уничтожение</Link></div>
            </div>
        </div>
    </div>
}