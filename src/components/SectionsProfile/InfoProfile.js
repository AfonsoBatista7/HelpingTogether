import { Title } from "@mui/icons-material";
import style from "./Profiles.module.css"
import { Pagination, Grid, Typography, Container } from "@mui/material";

function InfoProfile(props) {
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="left"
        justifyContent="center"
      >
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

      </Grid>

    </div>
  );
}

export default InfoProfile
