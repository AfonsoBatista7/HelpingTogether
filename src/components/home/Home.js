import React from 'react'
import SearchBar from "../search/SearchBar";
import Map from "./Map";
import HomeCarousel from './HomeCarousel';
import imageLogo from "../../images/logo.png";
import { Stack, Typography, Grid } from '@mui/material';

const Home = () => {
  return (
    <div>
        <center>
          <Grid container display='flex' alignItems='center' spacing={15}>
{/*             <Stack direction='column' alignItems='center' justifyContent='center' spacing={20}>
              <Stack direction="row" height={400} spacing={5}> */}
              <Grid xs={6}>
                <img
                    src={imageLogo}
                    alt="logo"
                    component="a"
                    href="/"
                ></img>
              </Grid>
              <Grid xs={6}>
                <Map />
              </Grid>
{/*               </Stack> */}
              <Grid xs={12}>
                <SearchBar />
              </Grid> 
              <Grid xs={12}>
                <HomeCarousel />
              </Grid>
{/*         </Stack> */}
          </Grid>
        </center>
    </div>
  )
}

export default Home