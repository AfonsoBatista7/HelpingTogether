
import style from "./Profiles.module.css"
import React, { useState, useEffect } from 'react'

import { Grid, Typography, Container, Avatar, Button, TextField, Rating } from "@mui/material";
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import Evaluation from "../Popup/Evaluation";
import Popup from "../Popup/Popup";

function InfoVoluntariado(props) {

    const [perfil, setPerfil] = useState(null);
    const [openPopupAvaliacao, setOpenPopupAvaliacao] = useState(false);

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([])

    //vai buscar todos os valores de login da BD e mete em loggedIns
    useEffect(() => {
        const getLoggedIn = async () => {


            const loggedInFromServer = await fetchLoggedIn()

            setLoggedIns(loggedInFromServer)
            console.log(loggedIns)


        }

        getLoggedIn(loggedIns)

    }, [])

    const fetchLoggedIn = async () => {
        const res = await fetch('http://localhost:5000/login')
        const data = await res.json()

        return data;
    }


    useEffect(() => {
        checkLogin()

    }, [loggedIns])

    const checkLogin = () => {

        for (const element of loggedIns) {
            if (element.isLoggedIn) {
                setPerfil(element);
            }
        }

    }

    const avaliar = () => {
        setOpenPopupAvaliacao(true);
    }

    const closeAvaliacao = () => {
        setOpenPopupAvaliacao(false);
    }

    var valueMessage = "Hello World sjajvsjdoKSDOAKALAPDASKDPAKDASKDVOAVKAKVKDNVFKAakjdjfahkfhkfhaksfhkjahfkashfkdhfkahfkhakrhgkuafhnsjdcajcnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnMDMVKADMVKAMVKAFVKDNFVKANDFKVNAKNFVAKSNVKASNVKANDVFNKSNFVKNSKAVNKASNVKASNVKFNVKANVKANVKANDKFMwlfkmLWFMLmfkfefKEFlkefjlkwflkawfkmaslvkmkadsvmamvmvaksndvkfkam";


    return (
        <div  >
            <div className={style.margins} style={{ alignItems: 'left', backgroundColor: "#AAC6AA", borderRadius: '10px', padding: '20px' }} >
                <Grid container direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start">

                    <Grid item xs={3}
                        justifyContent="center"
                        alignItems="center">

                        <img className={style.photoVoluntariado}
                            src="/Comida.png"

                        />

                        <Grid container direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            className={style.marginPhone}>
                            <Avatar className={style.marginRight}
                                src="/UNICEF.jpg"

                                sx={{ width: 30, height: 30 }} />
                            <Typography
                                style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: 'white',
                                    textTransform: "uppercase",
                                    textAlign: 'center'
                                }}>UNICEF</Typography>
                        </Grid>

                        <Grid container direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            className={style.marginPhone}>
                            <PinDropRoundedIcon className={style.marginRight} style={{
                                color: 'white',
                                fontSize: 30
                            }}></PinDropRoundedIcon>
                            <Typography
                                style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: 'white',
                                    textAlign: 'center'
                                }}>Porto</Typography>
                        </Grid>


                        <Grid container direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            className={style.marginPhone}>
                            <CalendarMonthRoundedIcon className={style.marginRight} style={{
                                color: 'white',
                                fontSize: 30
                            }}></CalendarMonthRoundedIcon>

                            <Typography className={style.margintop}
                                style={{
                                    fontWeight: 500,
                                    fontSize: 15,
                                    color: 'white',
                                    textTransform: "uppercase",
                                    textAlign: 'center'
                                }}>20/07/2022 - 25/07/2022</Typography>
                        </Grid>

                    </Grid>
                    <Grid item xs={8}
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        className={style.widhtdescription}>


                        <div className={style.titleVoluntariado}>

                            <Grid container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center">


                                <div className={style.descriptionvoluntario}>
                                    <Typography style={{
                                        fontWeight: 700,
                                        fontSize: 30,
                                        fontFamily: "Avanta Garde",
                                        color: '#3F6164',
                                        textTransform: "uppercase",
                                        textAlign: 'left'
                                    }}>Distribuição de refeições</Typography>
                                </div>

                                <div className={style.rating}>
                                    <Rating name="half-rating-read" defaultValue={3} precision={1} readOnly size="large" />
                                </div>
                            </Grid>

                        </div>

                        <Container className={style.descriptionarea} style={{ padding: "20px" }}>

                            <TextField className={style.description}
                                disabled
                                fullWidth
                                multiline
                                id="outlined-disabled"
                                defaultValue={valueMessage}
                            />

                        </Container>


                        {!perfil ? <></> : <>
                            {perfil.typePerfil === "organizacao" ? <>
                            </> : <>
                                <div className={style.avaliarbutton}>
                                    <Button style={{ background: "white" }} variant="contained" onClick={avaliar}>
                                        <Typography style={{ color: "#375658" }}>Avaliar</Typography>
                                    </Button>
                                    <Popup
                                        openPopup={openPopupAvaliacao}
                                        setOpenPopup={setOpenPopupAvaliacao}
                                    >
                                        <Evaluation name={perfil.name} nameWhoMakes={perfil.name} type="voluntariado" closePopup={closeAvaliacao} />
                                    </Popup></div>
                            </>}</>}
                    </Grid>
                </Grid >
            </div >
        </div>
    );
}

export default InfoVoluntariado
