import React from 'react'
import SearchBar from "../search/SearchBar";
import Map from "./Map";
import imageLogo from "../../images/logo.png";
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Map />
        <center>
            <Typography
            variant="h2"
            sx={{
                fontWeight: 400,
                color: "white",
            }}
            >Big ass logo</Typography>
            <img
                src={imageLogo}
                alt="BIG logo"
                component="a"
                href="/"
            ></img>
            <SearchBar />
        </center>
    </div>
  )
}

export default Home