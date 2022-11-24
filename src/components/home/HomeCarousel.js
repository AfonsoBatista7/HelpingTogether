import {React, useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./home.module.css";
import { Carousel } from 'react-responsive-carousel';
//import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function HomeCarousel(props) {
    let carouselData = []

/*     props.res.map((elem) => (
        carouselData.push(
            {
                headerText: elem.name,
                subText: elem.desc,
                image: "/"+elem.image,
            }
        )
    ))

    return (
        <Carousel
            data={carouselData}
            autoPlay={true}
            rightItem={<FaArrowRight />}
            leftItem={<FaArrowLeft />}
            animationDuration={3000}
            headerTextType="black"
            subTextType="white"
            size="normal"
        />
    ) */

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