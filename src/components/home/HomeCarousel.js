import React, { Component, Image } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./home.module.css";
import { Carousel } from 'react-responsive-carousel';
import { Container } from '@mui/material';
import smartie1 from "./Cats/smartie1.jpg"
import smartie3 from "./Cats/smartie3.jpg"
import diana1 from "./Cats/diana1.jpg"
import diana2 from "./Cats/diana2.jpg"

export default function HomeCarousel() {

    const images = {
        "Smartie 1": smartie1,
        "Smartie 2": smartie3,
        "Diana 1": diana1,
        "Diana 2": diana2
    }
    
    return (
        <Carousel className={style.carousel} width={500} showThumbs={false} infiniteLoop emulateTouch autoPlay>
            {Object.keys(images).map((image) => (
                <div className={style.imagec}>
                    <img className={style.image} src={images[image]} />
                    <p className="legend">{image}</p>
                </div>
            ))}
        </Carousel>
    )
};

/* ReactDOM.render(<HomeCarousel />, document.querySelector('.demo-carousel')); */

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>