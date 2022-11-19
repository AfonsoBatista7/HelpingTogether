
import style from "./Profiles.module.css"
import image from "../../images/people/Maria.jpg";
import React, { useState } from 'react'

import { Grid, Typography, Container, Avatar, Button, TextField, Rating } from "@mui/material";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


function InfoProfile(props) {

  console.log(props);

  const [editMode, editState] = useState(false);
  const [perfil, setPerfil] = useState();

  function changeState() {
    editState(!editMode);
  }

  var valueMessage = "Hello World sjajvsjdoKSDOAKALAPDASKDPAKDASKDVOAVKAKVKDNVFKAakjdjfahkfhkfhaksfhkjahfkashfkdhfkahfkhakrhgkuafhnsjdcajcnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnMDMVKADMVKAMVKAFVKDNFVKANDFKVNAKNFVAKSNVKASNVKANDVFNKSNFVKNSKAVNKASNVKASNVKFNVKANVKANVKANDKFMwlfkmLWFMLmfkfefKEFlkefjlkwflkawfkmaslvkmkadsvmamvmvaksndvkfkam";

//   const checkLogin = () => {
//       setPerfil(props.perfil);
// }

  //window.onload= setTimeout(checkLogin, 4000);


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

          {editMode ?
            <div className={style.marginChangePhoto}>
              <Container className={style.marginChangePhoto}>
                <Button variant="contained" component="label" size="small"  >
                  <AddPhotoAlternateIcon />
                  Alterar foto
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Container>
            </div> : ""}


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
                textAlign: 'center'
              }}>marialeal45@gmail.com</Typography>
          </Grid>

        </Grid>
        <Grid item xs={9}
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-end">

          <div style={{ height: 20 }}></div>
          <div style={{ height: 50 , alignItems:'left'}}>
            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly size="large" />
             </div>

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
                defaultValue={valueMessage}
              /> : <TextField className={style.description}

                fullWidth
                multiline
                id="outlined-disabled"
                defaultValue={valueMessage}
              />}


          </Container>

        </Grid>
      </Grid >
    </div >
  );
}

export default InfoProfile
