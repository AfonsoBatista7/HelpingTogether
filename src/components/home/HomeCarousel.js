import {React, useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./home.module.css";
import { Carousel } from 'react-responsive-carousel';
import BoxVoluntariado from '../StatsShowers/Box/BoxVoluntariado';
import smartie1 from "./Cats/smartie1.jpg"
import smartie3 from "./Cats/smartie3.jpg"
import diana1 from "./Cats/diana1.jpg"
import diana2 from "./Cats/diana2.jpg"

export default function HomeCarousel() {

    const [topOpport, setTopOpport] = useState([])

    useEffect(() => {
        const getTopOpport = async () => {
            const opportunities = await fetchTopOpport()
            setTopOpport(opportunities)
        }

        getTopOpport()
    }, [])

    const fetchTopOpport = async () => {
        const res = await fetch("http://localhost:5000/voluntariados")
        const data = await res.json()
        // TODO change to show the highest rated ones specifically?
        return data.voluntariados
    }

    const images = {
        "Smartie 1": smartie1,
        "Smartie 2": smartie3,
        "Diana 1": diana1,
        "Diana 2": diana2
    }
    
    return topOpport && (
        <Carousel className={style.carousel} width={500} showThumbs={false} infiniteLoop emulateTouch autoPlay>
{/*             {Object.keys(images).map((image) => (
                <div key={image} className={style.imagec}>
                    <img className={style.image} src={images[image]} />
                    <p className="legend">{image}</p>
                </div>
            ))} */}
            {Object.keys(topOpport).map((opp) => (
                <BoxVoluntariado image={opp.image} name={opp.name} desc={opp.desc} />
            ))}
        </Carousel>
    )
};