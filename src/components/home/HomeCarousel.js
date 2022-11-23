import {React, useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./home.module.css";
import { Carousel } from 'react-responsive-carousel';
import MiniBoxVoluntariado from '../StatsShowers/Box/MiniBoxVoluntariado';

export default function HomeCarousel(props) {

    return (
        <Carousel className={style.carousel} width={700} showThumbs={false} infiniteLoop emulateTouch autoPlay>
            {props.res.map((elem) => (
                <div key={elem.name} className={style.imagec}>
                    <img className={style.image} src={"/"+elem.image} />
                    <p className="legend">{elem.name}</p>
                </div>
            ))}
        </Carousel>
    )
};