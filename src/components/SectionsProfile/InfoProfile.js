import { Title } from "@mui/icons-material";
import style from "./Profiles.module.css"
import image from "../../images/people/Maria.jpg";

import { Grid, Typography, Container, Avatar, Stack, Button } from "@mui/material";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EditIcon from '@mui/icons-material/Edit';

function InfoProfile(props) {
  return (
    <div style={{ alignItems: 'left', backgroundColor: "#2E3B55", borderRadius: '10px' }} >

      <Grid container direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={3} >
          <Avatar className={style.marginprofile}
            src={image}

            sx={{ width: 200, height: 200 }}
          />
          <Typography style={{
            fontWeight: 700,
            fontSize: 30,
            color: 'white',
            textTransform: "uppercase",
            textAlign: 'center'
          }}>Maria Leal</Typography>
          <Grid container direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            className={style.marginPhone}>
            <LocalPhoneRoundedIcon className={style.marginRight} style={{
              color: 'white',
              fontSize: 30
            }}></LocalPhoneRoundedIcon>
            <Typography
              style={{
                fontWeight: 500,
                fontSize: 20,
                color: 'white',
                textTransform: "uppercase",
                textAlign: 'center'
              }}>900000000</Typography>
          </Grid>
          <Grid container direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            className={style.marginPhone}>
            <EmailOutlinedIcon className={style.marginRight} style={{
              color: 'white',
              fontSize: 30
            }}></EmailOutlinedIcon>

            <Typography className={style.margintop}
              style={{
                fontWeight: 500,
                fontSize: 15,
                color: 'white',
                textTransform: "uppercase",
                textAlign: 'center'
              }}>marialeal45@gmail.com</Typography>
          </Grid>

        </Grid>
        <Grid item xs={9} >
          <Button size="large" sx={{ color: 'white' }} style={{ float: 'right' }} className={style.marginRight}>Editar
            < EditIcon className={style.buttonmargin} style={{
              color: 'white',
              fontSize: 20
            }}></ EditIcon>
          </Button>
          <div className={style.description} style={{ borderRadius: '10px' }}>
            <Container style={{ height: 300 }}>
              <Typography className={style.margintop}> Description</Typography>
            </Container>
          </div>
        </Grid>
      </Grid >
    </div >
  );
}

export default InfoProfile
