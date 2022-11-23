import { React, useState, useEffect } from "react";
import SearchBar from "../Search/SearchBar";
import Map from "./Map";
import HomeCarousel from './HomeCarousel';
import { Grid } from '@mui/material';
import { Forest, Pets, Factory, People, FoodBank, HealthAndSafety } from '@mui/icons-material';
import MiniBoxVoluntariado from '../StatsShowers/Box/MiniBoxVoluntariado';

import smartie1 from "./Cats/smartie1.jpg";
import smartie3 from "./Cats/smartie3.jpg";
import diana1 from "./Cats/diana1.jpg";
import diana2 from "./Cats/diana2.jpg";
import VolunTypes from "./VolunTypes";

const Home = () => {
    const [topOpport, setTopOpport] = useState([]);

    useEffect(() => {
        const getTopOpport = async () => {
            const opportunities = await fetchTopOpport();
            setTopOpport(opportunities);
        };

        getTopOpport();
    }, []);

    const fetchTopOpport = async () => {
        const res = await fetch("http://localhost:5000/voluntariados");
        const data = await res.json();
        // TODO change to show the highest rated ones specifically?
        return data;
    };

    const catpics = [
        {
            name: "Smartie 1",
            description: "Smartie 1",
            image: smartie1,
        },
        {
            name: "Smartie 2",
            description: "Smartie 1",
            image: smartie3,
        },
        {
            name: "Diana 1",
            description: "Diana 1",
            image: diana1,
        },
        {
            name: "Diana 2",
            description: "Diana 2",
            image: diana2,
        },
    ];

    const volunTypes = {
        Natureza: <Forest sx={{color: "#EFF5F5",fontSize: 60}} fontSize="large" />,
        Animais: <Pets sx={{color: "#EFF5F5",fontSize: 60}} fontSize="large" />,
        Poluição: <Factory sx={{color:"#EFF5F5",fontSize: 60}} fontSize="large" />,
        Comunidade: <People sx={{color: "#EFF5F5",fontSize: 60}} fontSize="large" />,
        Gastronomia: <FoodBank sx={{color: "#EFF5F5",fontSize: 60}} fontSize="large" />,
        Saúde: <HealthAndSafety sx={{color: "#EFF5F5",fontSize: 60}} fontSize="large" />,
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
            <div className={style.fisrtSection}>
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
            <Grid
                container
                display="flex"
                justifyContent="center"
                align="center"
                alignItems="center"
                rowSpacing={10}
                style={{ marginTop: 20 }}
            >
                <Grid item xs={6}>
                    <VolunTypes types={volunTypes} />
                </Grid>
                <Grid item xs={6}>
                    <Map />
                </Grid>
                <Grid item xs={6}>
                    <SearchBar filters={filters} />
                </Grid>
                <Grid item xs={12}>
                    {topOpport ?
                        <HomeCarousel res={topOpport} />
                    :
                        <HomeCarousel res={catpics} />
                    }
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;

