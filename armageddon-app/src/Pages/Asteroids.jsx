import { Header } from "../components/header/Header"
import styles from "./Styles.css"
import spaceImage from "../images/space.jpg"
import stoneImage from "../images/stone.jpg"

export const Asteroids = () => {
    return <div>
        <Header/>
        <h2>Астероиды</h2>
            <div className="img-container">
                <img src={spaceImage} alt="*space*"></img>
            </div>
            <div className="img-container">
                <img src={stoneImage} alt="*stone*"></img>
            </div>
        </div>
}