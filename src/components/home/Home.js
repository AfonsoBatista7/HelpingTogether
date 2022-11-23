import { React, useState, useEffect } from "react";
import SearchBar from "../Search/SearchBar";
import Map from "./Map";
import HomeCarousel from "./HomeCarousel";
import { Grid, Typography } from "@mui/material";
import style from "./home.module.css";

import smartie1 from "./Cats/smartie1.jpg";
import smartie3 from "./Cats/smartie3.jpg";
import diana1 from "./Cats/diana1.jpg";
import diana2 from "./Cats/diana2.jpg";
import { Repeat } from "@mui/icons-material";

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

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "-155px -25px",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url(/voluntariado.png)",
            }}
            >
              <Grid container className={style.titleContainer} direction="column" justifyContent="center" alignItems="center">
                <Grid item className={style.title}>HELPING</Grid>
                <Grid item className={style.title}>TOGETHER</Grid>
                <Grid item className={style.slogan}>Juntos Fazemos a Diferença!!!</Grid>

              </Grid>

        </div>
    );
};

export default Home;
{
    /* <center>
  <Grid container display='flex' align='center' alignItems='center' rowSpacing={20} style={{marginTop: 20}}>
      <Grid item xs={2}>
      
      </Grid>
      <Grid item xs={4}>
        <SearchBar />
      </Grid>
      <Grid item xs={4}>
        <Map />
      </Grid>
      <Grid item xs={2}>
        
      </Grid>
      <Grid item xs={12}>
        { topOpport ? <>
          <HomeCarousel res={topOpport}/></>
        : <>
          <HomeCarousel res={catpics}/></>}
      </Grid>
  </Grid>
</center> */
}
