import { React, useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Slider from "react-slick";
import style2 from "./homeCarousel.module.css";
import { Link } from 'react-router-dom';

export default function HomeCarousel(props) {

    const [voluntariados, setVoluntariados] = useState([])

    useEffect(() => {
        const getVolt = async () => {
            const volFromServer = await fetchVolt()

            setVoluntariados(volFromServer)
        }

        getVolt()

    }, [])

    const fetchVolt = async () => {
        const res = await fetch('http://localhost:5000/voluntariados')
        const data = await res.json()

        var list = [];

        for (const e of data) {
            list.push({ ...e, image: "/" + e.image });
        }


        return list;
    }

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <ArrowForwardIosIcon />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <ArrowBackIosIcon />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };


    return (
        <div className={style2.homeCarousel}>
            {voluntariados &&
                <Slider {...settings}>
                    {voluntariados.map((vol, idx) => (
                        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                            <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Voluntariado/${vol.id}`} onClick={() => this.forceUpdate()}>
                                <img style={{ width: "400px", height: "250px", borderRadius: "5px" }} src={vol.image} alt={vol.image} />
                                <span className={style2.title}>{vol.name}</span>
                            </Link>
                        </div>
                    ))}
                </Slider>}
        </div >
    )
};
