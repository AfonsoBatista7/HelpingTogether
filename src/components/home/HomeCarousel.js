import {React, useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./home.module.css";
import { Carousel } from 'react-responsive-carousel';
import BoxVoluntariado from '../StatsShowers/Box/BoxVoluntariado';

export default function HomeCarousel(props) {

    return (
        <Carousel className={style.carousel} width={500} showThumbs={false} infiniteLoop emulateTouch autoPlay>
            {Object.keys(props.res).map((elem) => (
                <BoxVoluntariado key={elem.name} image={elem.image} name={elem.name} desc={elem.description} />
            ))}
        </Carousel>
    )
};