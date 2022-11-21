
import style from "./Profiles.module.css"
import React, { useState } from 'react'
import { Grid, Typography, Container, Avatar, Button, TextField, Rating } from "@mui/material";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import FemaleRoundedIcon from '@mui/icons-material/FemaleRounded';
import MaleRoundedIcon from '@mui/icons-material/MaleRounded';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Evaluation from "../Popup/Evaluation";
import Popup from "../Popup/Popup";


function InfoProfile(props) {

  const [editMode, editState] = useState(false);

  const [loggedIns, setLoggedIns] = useState([]);
  const [openPopupAvaliacao, setOpenPopupAvaliacao] = useState(false);

  function changeState() {
    editState(!editMode);

    if (editMode) {
      changeLogginStatus(props.id, props.description);
    }
  }

  const fetchLogin = async (id) => {
    const res = await fetch(`http://localhost:5000/login/${id}`)
    const data = await res.json()

    return data
  }

  const changeLogginStatus = async (id, descript) => {
    const loginToChange = await fetchLogin(id)
    const updLogin = { ...loginToChange, description: descript }

    const res = await fetch(`http://localhost:5000/login/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updLogin),
    })

    const data = await res.json()

    setLoggedIns(
      loggedIns.map((element) =>
        element.id === id ? { ...element, description: data.description } : element

      )
    )
  }

  const avaliar = () => {
    setOpenPopupAvaliacao(true);
  }

  const closeAvaliacao = () => {
    setOpenPopupAvaliacao(false);
  }

  return (
    <div id="Perfil"  style={{ alignItems: 'left', backgroundColor: "#497174", borderRadius: '10px' }} >

      <Grid container direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >

        <Grid item xs={3}
          justifyContent="center"
          alignItems="center">

          <Avatar className={style.marginprofile}
            src={props.image}

            sx={{ width: 200, height: 200 }} />


          <Typography style={{
            fontWeight: 700,
            fontSize: 30,
            color: 'white',
            textTransform: "uppercase",
            textAlign: 'center',
            wordWrap: "break-word"
          }}>{props.name}</Typography>



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
              }}>{props.phone}</Typography>
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
              }}>{props.email}</Typography>
          </Grid>

          {props.type === "organizacao" ? <>

          </> : <>
            <Grid container direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className={style.marginPhone}>

              {!props.gender === "female" ? <>
                <MaleRoundedIcon className={style.marginRight} style={{
                  color: 'white',
                  fontSize: 30
                }}></MaleRoundedIcon>
              </> : <>
                <FemaleRoundedIcon className={style.marginRight} style={{
                  color: 'white',
                  fontSize: 30
                }}></FemaleRoundedIcon></>}


              <Typography className={style.margintop}
                style={{
                  fontWeight: 500,
                  fontSize: 15,
                  color: 'white',
                  textTransform: "uppercase",
                  textAlign: 'center'
                }}>{props.gender}</Typography>
            </Grid>

            <Grid container direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className={style.marginPhone}>
              <CakeRoundedIcon className={style.marginRight} style={{
                color: 'white',
                fontSize: 30
              }}></CakeRoundedIcon>

              <Typography className={style.margintop}
                style={{
                  fontWeight: 500,
                  fontSize: 15,
                  color: 'white',
                  textAlign: 'center'
                }}>{props.birthday}</Typography>
            </Grid>

          </>}

        </Grid>
        <Grid item xs={9}
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-end"
          style={{ padding: "5px" }}>

          <div style={{ height: 20 }}></div>
          <div style={{ height: 50}} className={style.titleVoluntariado}>
            <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center">

              <Grid item xs={5}>
                {editMode ?
                  <div className={style.avaliarbutton} style={{float: "left"}}>
                    <Container className={style.marginChangePhoto}>
                      <Button variant="contained" style={{ background: "gray" }} component="label" size="small"  >
                        <AddPhotoAlternateIcon />
                        Alterar foto
                        <input hidden accept="image/*" multiple type="file" />
                      </Button>
                    </Container>
                  </div> : <></>}
              </Grid>
              <Grid item xs={5}>
                <div style={{float: "right"}}>
                <Rating name="half-rating-read" defaultValue={props.rating} precision={1} readOnly size="large" />
                </div>
              </Grid>
            </Grid>
          </div>


          <div className={style.buttonedit}>
            {!props.login ? <></> : <>{!editMode ?
              <Button size="large" sx={{ color: 'white' }} style={{ float: 'right' }} onClick={changeState}>Editar
                < EditIcon className={style.buttonmargin} style={{
                  color: 'white',
                  fontSize: 20
                }}></ EditIcon>
              </Button>
              : <Button size="large" sx={{ color: 'white' }} style={{ float: 'right' }} onClick={changeState}>Guardar
                < SaveIcon className={style.buttonmargin} style={{
                  color: 'white',
                  fontSize: 20
                }}></ SaveIcon>
              </Button>}</>
            }
          </div>


          <Container className={style.descriptionarea}>

            {!editMode ?
              <TextField className={style.description}
                disabled
                fullWidth
                multiline
                id="outlined-disabled"
                defaultValue={props.description}
              /> : <TextField className={style.description}

                fullWidth
                multiline
                id="outlined-disabled"
                defaultValue={props.description}
              />}


          </Container>

          <div className={style.titleVoluntariado}>
            {props.login ? <></> :
              <><div className={style.avaliarbutton} >
                <Button style={{ background: "white" }} variant="contained" onClick={avaliar}>
                  <Typography style={{ color: "#497174" }}>Avaliar</Typography>
                </Button>
                <Popup
                  openPopup={openPopupAvaliacao}
                  setOpenPopup={setOpenPopupAvaliacao}
                >
                  <Evaluation name={props.name} nameWhoMakes={props.name} type="pessoa" closePopup={closeAvaliacao} />
                </Popup>
                </div></>}
        </div>
      </Grid>
    </Grid >
    </div >
  );
}

export default InfoProfile
