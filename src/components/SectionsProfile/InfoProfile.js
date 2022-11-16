import { Title } from "@mui/icons-material";
import style from "./Profiles.module.css"
import image from "../../images/people/Maria.jpg";

import { Card, Grid, Typography, Container, Avatar, CardContent, Paper } from "@mui/material";

function InfoProfile(props) {
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="left"
        justifyContent="center"
      >
        <Paper containerStyle={{elevation:0}} >
          
            <Avatar
              src={image}
              sx={{ width: 200, height: 200 }}
            />
            <Typography style={{
              fontWeight: 700,
              fontSize: 30,
              color: '#2E3B55',
              textTransform: "uppercase",
              textAlign: 'left'
            }}>Maria</Typography>

            <Typography style={{
              fontWeight: 700,
              fontSize: 30,
              color: '#2E3B55',
              textTransform: "uppercase",
              textAlign: 'left'
            }}>Leal</Typography>

          
        </Paper>
      </Grid>

    </div>
  );
}

export default InfoProfile
