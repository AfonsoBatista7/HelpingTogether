import { Title } from "@mui/icons-material";
import style from "./Profiles.module.css"
import image from "../../images/people/Maria.jpg";

import { Grid, Typography, Container, Avatar, Stack } from "@mui/material";

function InfoProfile(props) {
  return (
    <div style={{ alignItems: 'left' }}>

      <Grid container spacing={3}>
        <Grid item xs={4} container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start">
          
          
            <Avatar
              src={image}

              sx={{ width: 200, height: 200 }}
            />
            <Typography style={{
              fontWeight: 700,
              fontSize: 30,
              color: '#2E3B55',
              textTransform: "uppercase",
              textAlign: 'center'
            }}>Maria</Typography>

            <Typography style={{
              fontWeight: 700,
              fontSize: 30,
              color: '#2E3B55',
              textTransform: "uppercase",
              textAlign: 'center'
            }}>Leal</Typography>
         
          
        </Grid>
      </Grid >
    </div>
  );
}

export default InfoProfile
