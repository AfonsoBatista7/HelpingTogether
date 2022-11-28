import { React, useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import Map from "./Map";
import HomeCarousel from './HomeCarousel';
import { Grid } from '@mui/material';
import { Forest, Pets, Factory, People, FoodBank, HealthAndSafety } from '@mui/icons-material';
import style from "./home.module.css"
import VolunTypes from "./VolunTypes";


const Home = () => {
    const [topOpport, setTopOpport] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getTopOpport = async () => {
            const opportunities = await fetchTopOpport();
            setTopOpport(opportunities.slice(0, 5));
        };

        getTopOpport();
    }, []);

    const fetchTopOpport = async () => {
        const res = await fetch("http://localhost:5000/voluntariados");
        const data = await res.json();
        // TODO change to show the highest rated ones specifically?
        return data;
    };

    const volunTypes = {
        Natureza: <Forest sx={{ color: "#EFF5F5", fontSize: 80 }} fontSize="large" />,
        Animais: <Pets sx={{ color: "#EFF5F5", fontSize: 80 }} fontSize="large" />,
        Poluição: <Factory sx={{ color: "#EFF5F5", fontSize: 80 }} fontSize="large" />,
        Comunidade: <People sx={{ color: "#EFF5F5", fontSize: 80 }} fontSize="large" />,
        Gastronomia: <FoodBank sx={{ color: "#EFF5F5", fontSize: 80 }} fontSize="large" />,
        Saúde: <HealthAndSafety sx={{ color: "#EFF5F5", fontSize: 80 }} fontSize="large" />,
    };

    const filters = {
        /*     Tipo: ['Natureza', 'Animais', 'Poluição', 'Comunidade', 'Gastronomia', 'Saúde'], */
        Tipo: Object.keys(volunTypes),
        Região: [
            "Norte",
            "Centro",
            "Alentejo",
            "Área Metropolitana Lisboa",
            "Algarve",
            "Açores",
            "Madeira",
        ],
        Duração: ["Reduzida", "Média", "Longa"],
    };

    return (
        <div>
            <div className={style.firstSection}>
                <Grid
                    container
                    className={style.titleContainer}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item className={style.title}>
                        HELPING
                    </Grid>
                    <Grid item className={style.title}>
                        TOGETHER
                    </Grid>
                    <Grid item className={style.slogan}>
                        Juntos Fazemos a Diferença!!!
                    </Grid>
                </Grid>
            </div>
            <div style={{ marginTop: "130px" }}>
                <VolunTypes types={volunTypes} />
            </div>
            <div style={{ marginTop: "140px" }}>
                <Map />
            </div>
            <div style={{ marginTop: "18%" }}>
                <HomeCarousel />
            </div>
        </div>
    );
};

export default Home;

