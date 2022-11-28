import style from "./Profiles.module.css"
import React, { useState, useReducer, useEffect } from 'react'
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
import IconInfo from "./IconInfo";


function InfoProfile(props) {

  var description;

  const [editMode, editState] = useState(false);

  const [loggedIns, setLoggedIns] = useState([]);

  function changeState() {
    editState(!editMode);

    if (editMode) {
      changeLogginStatus(props.id, description)
    }
  }

  const fetchLogin = async (id) => {
    const res = await fetch(`http://localhost:5000/login/${id}`)
    const data = await res.json()

    return data
  }

  const saveDescription = (descrip) =>{
    description=descrip
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

  return (
    <div id="Perfil" style={{ alignItems: 'left', padding: "15px", 
      background: props.type === "organizacao"  ?
                                 "linear-gradient(0deg, rgba(52,77,103,1) 0%, rgba(110,204,175,1) 100%)" :
                                 "linear-gradient(0deg, rgba(110,204,175,1) 0%, rgba(52,77,103,1) 100%)",
      borderRadius: '15px',
      height: "75vh",
      marginTop: "30px"}} >


      <div>
        <div>

          <div>
              {props.type !== "organizacao" ? 
                  <div style={{display: "flex", justifyContent: "end" }}>
                    <Rating name="half-rating-read" defaultValue={props.rating} precision={1} readOnly size="large" />
                  </div>
                  :
                  <div style={{height: "40px"}}></div>
              }
          </div>
          <Avatar className={style.marginprofile}
            src={"/" + props.image}

            sx={{position: "relative", bottom: "70px", outline: "5px solid rgba(52,77,103,1)" , width: 200, height: 200 }}
          />
            <div style={{
              font: "bold 14px/1.4 'Open Sans', arial, sans-serif",
              letterSpacing: "0.1em",
              color: "#EFF5F5",
              fontWeight: 700,
              fontSize: 40,
              textAlign: 'center',
              position: "relative",
              bottom: "50px",
              wordWrap: "break-word",
            }}>{props.name}</div>

            <div style={{position: "relative", bottom: "40px"}}>
              <IconInfo style={{right: "240px", justifyContent: "center", bottom: "200px"}} info={props.phone} right={true}>
                <LocalPhoneRoundedIcon style={{
                  color: 'white',
                  marginLeft: "100%",
                  position: "relative",
                  fontSize: 30
                }}/>
              </IconInfo>
              
              <IconInfo style={{left: "830px", bottom: "235px"}} info={props.email} right={false}>
                <EmailOutlinedIcon style={{
                  color: 'white',
                  marginRight: "15px",
                  fontSize: 30
                }}/>
              </IconInfo>

            {props.type !== "organizacao" ? <>
              <IconInfo style={{left: "160px", justifyContent: "center",bottom: "200px"}} info={props.gender} right={false}>
                {props.gender !== "female" ?
                  <MaleRoundedIcon style={{
                    color: 'white',
                    marginRight: "15px",
                    fontSize: 30
                  }}/>
                : 
                  <FemaleRoundedIcon style={{
                    color: 'white',
                    marginRight: "15px",
                    fontSize: 30
                  }}/> 
              }
              </IconInfo>

              <IconInfo style={{right: "215px",justifyContent: "center", bottom: "235px"}} info={props.birthday} right={true}>
                <CakeRoundedIcon className={style.marginRight} style={{
                  color: 'white',
                  marginLeft: "100%",
                  fontSize: 30
                }}/>
              </IconInfo>
            </> : <div style={{height: "100px"}}></div>}
          </div>

        </div>
        <div>
          <div style={{position: "relative", bottom: "5vh"}}>
            <div className={style.buttonedit}>
              {props.login && <>
                <Button size="large" sx={{ color: 'white' }} style={{ float: 'right' }} onClick={changeState}> 
                  {!editMode ?
                  <> 
                    Editar
                    <EditIcon className={style.buttonmargin} style={{
                      color: 'white',
                      fontSize: 20
                    }}/>
                  </>
                  : 
                  <>
                    Guardar
                    <SaveIcon className={style.buttonmargin} style={{
                      color: 'white',
                      fontSize: 20
                    }}/>
                  </>
                  }
                </Button>
              </>}
              {editMode ?
                <Button sx={{position: "relative", left: "16vw", top:"1vh", color: "white"}} component="label" size="small"  >
                  <AddPhotoAlternateIcon style={{color: "white"}}/>
                    Alterar foto
                  <input hidden accept="image/*" multiple type="file" />
                </Button> :
                <div style={{height: "32px"}}></div>
                } 
            </div>


            <Container className={style.descriptionarea}>
                <div className={style.description} style={{ bottom: props.type !== "organizacao" ? "17vh" : "23vh", color: "white", marginLeft: "5px"}}>Description</div>
                  <TextField className={style.description} style={{ bottom: props.type !== "organizacao" ? "17vh" : "23vh"}}
                    disabled={!editMode}
                    fullWidth
                    multiline
                    rows={5}
                    id="outlined-basic"
                    defaultValue={props.description}
                    onChange={editMode ? (event) => {saveDescription( event.target.value)} : "none"}
                    sx={{
                      backgroundColor: "rgba(234, 240, 246, 0.2)"}}
                  /> 
            </Container>
          </div>

          {props.perfilLoggedIn ?
            <div className={style.titleVoluntariado}>
              {props.login ? <></> : <>

                {(props.perfilLoggedIn.typePerfil === "organizacao") && (props.type !== "organizacao") ?
                  <><div className={style.avaliarbutton} >
                    <Button style={{ background: "white" }} variant="contained" onClick={props.avaliar}>
                      <Typography style={{ color: "#344D67" }}>Avaliar</Typography>
                    </Button>
                    <Popup
                      openPopup={props.openPopupAvaliacao}
                      setOpenPopup={props.setOpenPopupAvaliacao}
                    >
                      <Evaluation idPersonCommented={props.id} idPersonCommenting={props.perfilLoggedIn.id} name={props.perfilLoggedIn.name} nameOfTheCommented={props.name} type="pessoa" closePopup={props.closeAvaliacao} />
                    </Popup>
                  </div></> : <></>}</>
              }
            </div> : <></>}
        </div >
      </div >
    </div >
  );
}

export default InfoProfile;
