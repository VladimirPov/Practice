import { Header } from "../components/header/Header"
import destroyImage from "../images/destroy.jpg"

export const Destroyment = () => {
    return <div>
        <Header/>
        <h2>Уничтожение</h2>
        <div className="img-container">
            <img src={destroyImage} alt="*destroy*"></img>
        </div>
        </div>
}