import React from 'react'
import SearchBar from "../search/SearchBar";
import Map from "./Map";
import HomeCarousel from './HomeCarousel';
import imageLogo from "../../images/logo.png";
import { Grid } from '@mui/material';

// alguem que perceba mais de css e nao enlouqueça?
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
              <Grid xs={12}>
                <SearchBar />
              </Grid> 
              <Grid xs={12}>
                <HomeCarousel />
              </Grid>
          </Grid>
        </center>
    </div>
  )
}

export default Home