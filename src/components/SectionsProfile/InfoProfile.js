
import style from "./Profiles.module.css"
import image from "../../images/people/Maria.jpg";
import React, { useState } from 'react'

import { Grid, Typography, Container, Avatar, Button, TextField } from "@mui/material";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';




function InfoProfile(props) {

  const [editMode, editState] = useState(false);

  function changeState() {
    editState(!editMode);
  }

  var valueMessage="Hello World sjajvsjdoKSDOAKALAPDASKDPAKDASKDVOAVKAKVKDNVFKAakjdjfahkfhkfhaksfhkjahfkashfkdhfkahfkhakrhgkuafhnsjdcajcnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnMDMVKADMVKAMVKAFVKDNFVKANDFKVNAKNFVAKSNVKASNVKANDVFNKSNFVKNSKAVNKASNVKASNVKFNVKANVKANVKANDKFMwlfkmLWFMLmfkfefKEFlkefjlkwflkawfkmaslvkmkadsvmamvmvaksndvkfkam";
  

  return (
    <div style={{ alignItems: 'left', backgroundColor: "#2E3B55", borderRadius: '10px' }} >

      <Grid container direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >


        <Grid item xs={3}
          justifyContent="center"
          alignItems="center">

          <Avatar className={style.marginprofile}
            src={image}

            sx={{ width: 200, height: 200 }} />
          <Typography style={{
            fontWeight: 700,
            fontSize: 30,
            color: 'white',
            textTransform: "uppercase",
            textAlign: 'center'
          }}>Maria Leal</Typography>



          <Grid container direction="row"
            justifyContent="flex-start"
            alignItems="center"
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
            alignItems="center"
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
        <Grid item xs={9}
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-end">

            <div style={{height:70}}></div>

          {!editMode ?
            <Button size="large" sx={{ color: 'white' }} style={{ float: 'right' }} className={style.buttonedit} onClick={changeState}>Editar
              < EditIcon className={style.buttonmargin} style={{
                color: 'white',
                fontSize: 20
              }}></ EditIcon>
            </Button>
            : <Button size="large" sx={{ color: 'white' }} style={{ float: 'right' }} className={style.buttonedit} onClick={changeState}>Guardar
              < SaveIcon className={style.buttonmargin} style={{
                color: 'white',
                fontSize: 20
              }}></ SaveIcon>
            </Button>}




          <Container className={style.descriptionarea}>

          {!editMode ?
          <TextField className={style.description}
              disabled
              fullWidth
              multiline
              id="outlined-disabled"
              defaultValue={ valueMessage}
              />:<TextField className={style.description}
              
              fullWidth
              multiline
              id="outlined-disabled"
              defaultValue={ valueMessage}
              />}

            
          </Container>

        </Grid>
      </Grid >
    </div >
  );
}

export default InfoProfile
