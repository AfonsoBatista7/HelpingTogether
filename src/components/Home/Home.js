import { React, useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import Map from "./Map";
import HomeCarousel from './HomeCarousel';
import { Grid, Typography } from '@mui/material';
import { Forest, Pets, Factory, People, FoodBank, HealthAndSafety } from '@mui/icons-material';
import style from "./home.module.css"
import VolunTypes from "./VolunTypes";

import smartie1 from "./Cats/smartie1.jpg";
import smartie3 from "./Cats/smartie3.jpg";
import diana1 from "./Cats/diana1.jpg";
import diana2 from "./Cats/diana2.jpg";


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
        Natureza: <Forest sx={{ color: "#EFF5F5", fontSize: 80 }} fontSize="large" />,
        Animais: <Pets sx={{ color: "#EFF5F5", fontSize: 80 }} fontSize="large" />,
        Poluição: <Factory sx={{ color: "#EFF5F5", fontSize: 80 }} fontSize="large" />,
        Comunidade: <People sx={{ color: "#EFF5F5", fontSize: 80 }} fontSize="large" />,
        Gastronomia: <FoodBank sx={{ color: "#EFF5F5", fontSize: 80 }} fontSize="large" />,
        Saúde: <HealthAndSafety sx={{ color: "#EFF5F5", fontSize: 80 }} fontSize="large" />,
    };

    const filters = {
        /*     Tipo: ['Natureza', 'Animais', 'Poluição', 'Comunidade', 'Gastronomia', 'Saúde'], */
        Estado: ["A Decorrer", "Finalizados",],
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
            <div>
                <SearchBar 
                        onSearchTextUpdate={(text) => navigate("/Voluntariados?Texto=" + text)} 
                        onFilterUpdate={(filter, value) => navigate("/Voluntariados?" + filter + "=" + value)} 
                        onClearFilter={() => navigate("/Voluntariados")}
                        filters={filters} /></div>
            <div>
                <HomeCarousel />
            </div>
        </div>
    );
};

export default Home;

