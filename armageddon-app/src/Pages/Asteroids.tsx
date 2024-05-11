import { Header } from "../components/header/Header.tsx"
import styles from "./Pages.module.css"
import { useEffect, useState } from "react"
import {AsteroidCard} from "../components/AsteroidCard/AsteroidCard.tsx"

export const Asteroids = () => {
    const [asteroids, setAsteroids] = useState<{
        name: string;
        date: string;
        distance: {
            kilometer: number;
            lunar: number;
        },
        size: number;
        id: string;
        isDangerous: boolean
     }[]>([])
    const[onlyDangerous, setOnlyDangerous] = useState(false)
    const api_key = process.env.react;
    useEffect(() => {
        try{
            fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${(api_key === undefined)? "DEMO_KEY" : api_key}`).then((res)=>{
                return res.json();
            }).then((responce) => {
                console.log(responce);
                let rawAsteroids = [];
                for (const data in responce.near_earth_objects) {
                    rawAsteroids = rawAsteroids.concat(responce.near_earth_objects[data]);
                }
                const asteroids = rawAsteroids.map(item=>{
                    const size = Math.trunc((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min)/2);
                    const close = item.close_approach_data[0];
                    return {
                        name: item.name, 
                        date: close.close_approach_date,
                        size,
                        distance: {kilometer: Math.trunc(close.miss_distance.kilometers), lunar: Math.trunc(close.miss_distance.lunar)},
                        isDangerous: item.is_potentially_hazardous_asteroid, 
                        id: item.id
                    }
                })
                setAsteroids(asteroids);
            })
        }
        catch(err) {
            console.log(err)
            setAsteroids(generateAsteroids())
        }
    }, [api_key])
    let [isKM, setKM] = useState(false);
    return <div>
        <Header/>
        <div className={styles.filterConteiner}>
            <div className={styles.showDangerousOnly}>
                <input type="checkbox" value={onlyDangerous as unknown as string} onChange={()=>setOnlyDangerous(!onlyDangerous)}></input>
                Показать только опасные
            </div>
            <div className={styles.distanceMode}>
                Расстояние 
                <button className={styles.distanceButtons} value ={isKM as unknown as string} onClick={()=>setKM(isKM = false)}> в километрах</button>
                <button className={styles.distanceButtons} value ={isKM as unknown as string} onClick={()=>setKM(isKM = true)}> в дистанциях до луны</button>
            </div>
        </div>
        {isKM ? onlyDangerous ? asteroids.filter((item)=>item.isDangerous).map((item)=><AsteroidCard key={item.id}
          name={item.name} date={item.date} size={item.size} distance={item.distance} isDangerous={item.isDangerous} DistanceMode={true}/>) : 
          asteroids.map((item)=><AsteroidCard
          name={item.name} date={item.date} size={item.size} distance={item.distance} isDangerous={item.isDangerous} DistanceMode={true}/>) :
          onlyDangerous ?
          asteroids.filter((item)=>item.isDangerous).map((item)=><AsteroidCard
              name={item.name} date={item.date} size={item.size} distance={item.distance} isDangerous={item.isDangerous} DistanceMode={false}/>) :
          asteroids.map((item)=><AsteroidCard
              name={item.name} date={item.date} size={item.size} distance={item.distance} isDangerous={item.isDangerous} DistanceMode={false}/>)
        }
    </div>
}
const generateAsteroids = () => {
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const result = [];
    for (let i = 0; i < 10; i++){
        const name = (Math.random() * 124 + 1900).toFixed(0) + ' ' + characters[(Math.random()*25).toFixed(0)] + characters[(Math.random()*25).toFixed(0)];
        const date = `${(Math.random()*27 + 1).toFixed(0)} ${months[(Math.random()*11).toFixed(0)]} 2024`;
        const size = (Math.random()*100 + 10).toFixed(0);
        const distance = (Math.random()*90000000).toFixed(0);
        const isDangerous = Math.random() >= 0.5;
        result.push({name, date, size, distance, isDangerous, id:name});
    }
    return result;
}