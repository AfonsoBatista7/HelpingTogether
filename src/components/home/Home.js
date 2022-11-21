import { React } from 'react'
import SearchBar from "../search/SearchBar";
import Map from "./Map";
import HomeCarousel from './HomeCarousel';
import { Grid } from '@mui/material';

// alguem que perceba mais de css e nao enlouqueça?
const Home = () => {
  return (
    <div>
        <center>
          <Grid container display='flex' align='center' alignItems='center' rowSpacing={20} style={{marginTop: 20}}>
{/*             <Stack direction='column' alignItems='center' justifyContent='center' spacing={20}>
              <Stack direction="row" height={400} spacing={5}> */}
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
                <HomeCarousel />
              </Grid>
          </Grid>
        </center>
    </div>
  )
}

export default Home