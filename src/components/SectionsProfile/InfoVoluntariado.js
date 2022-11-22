
import style from "./Profiles.module.css"
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { Grid, Typography, Container, Avatar, Button, TextField, Rating } from "@mui/material";
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import Evaluation from "../Popup/Evaluation";
import Popup from "../Popup/Popup";

function InfoVoluntariado(props) {

    const [perfil, setPerfil] = useState(null);

    //vetor com todos os valores no login da Base de dados
    const [loggedIns, setLoggedIns] = useState([])

    const [org, setOrg] = useState(null);

    const [organizacoes, setOrganizacoes] = useState([])



    //vai buscar todos os valores de login da BD e mete em loggedIns
    useEffect(() => {
        const getLoggedIn = async () => {


            const loggedInFromServer = await fetchLoggedIn()

            setLoggedIns(loggedInFromServer)


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

    useEffect(() => {
        const getOrganizacoes = async () => {
            const organizacoesFromServer = await fetchOrganizacoes()

            setOrganizacoes(organizacoesFromServer)

        }

        getOrganizacoes(organizacoes)

    }, [])
    

    const fetchOrganizacoes = async () => {
        const res = await fetch('http://localhost:5000/organizacoes')

        const res2 = await fetch('http://localhost:5000/login')

        const data = await res.json()

        const data2 = await res2.json()

        var list = [];

        for (const element of data) {
            list.push(element)
        }

        for (const element of data2) {
            if (element.typePerfil === "organizacao")
                list.push(element)
        }

        return list;
    }

    useEffect(() => {
        checkOrganizacao()

    }, [organizacoes])

    const checkOrganizacao = () => {

        for (const element of organizacoes) {
            if (element.name === props.organizacao) {
                setOrg(element);
            }
        }

    }


    return (<>
        {org ? <>
            <div>
                <div className={style.margins} style={{ alignItems: 'left', backgroundColor: "#AAC6AA", borderRadius: '10px', padding: '20px' }} >
                    <Grid container direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start">

                        <Grid item xs={3}
                            justifyContent="center"
                            alignItems="center">

                            <img className={style.photoVoluntariado}
                                src={"/" + props.image}

                            />

                            <Grid container direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                className={style.marginPhone}>
                                <Avatar className={style.marginRight}
                                    src={"/" + org.image}

                                    sx={{ width: 30, height: 30 }} />
                                <Link style={{ color: "#2E3B55", textDecoration: "none" }} to={`/Perfil/${org.id}`}>
                                    <Typography
                                        style={{
                                            fontWeight: 500,
                                            fontSize: 20,
                                            color: 'white',
                                            textTransform: "uppercase",
                                            textAlign: 'center'
                                        }}>{props.organizacao}</Typography>
                                </Link>
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
                                    }}>{props.location}</Typography>
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
                                    }}>{props.startDate} - {props.endDate}</Typography>
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


                                    <div className={style.descriptionvoluntario} >
                                        <Typography style={{
                                            fontWeight: 700,
                                            fontSize: 30,
                                            fontFamily: "Avanta Garde",
                                            color: '#3F6164',
                                            textTransform: "uppercase",
                                            wordWrap: "break-word",
                                            textAlign: 'left'
                                        }}>{props.name} </Typography>
                                    </div>

                                    <div className={style.rating}>
                                        <Rating name="half-rating-read" defaultValue={props.rating} precision={1} readOnly size="large" />
                                    </div>
                                </Grid>

                            </div>


                            
                            <Container className={style.descriptionarea} style={{ padding: "20px" }}>
                            <div style={{ float: "left" }}>
                                <Typography style={{ color: "white" }}>
                                    Descrição
                                </Typography>
                            </div>
                                <TextField className={style.description}
                                    disabled
                                    fullWidth
                                    multiline
                                    id="outlined-disabled"
                                    defaultValue={props.description}
                                />

                            </Container>

                            {!perfil ? <></> : <>
                                {perfil.typePerfil === "organizacao" ? <>
                                </> : <>
                                    {props.done ? <>
                                        <div className={style.avaliarbutton}>
                                            <Button style={{ background: "white" }} variant="contained" onClick={props.avaliar}>
                                                <Typography style={{ color: "#375658" }}>Avaliar</Typography>
                                            </Button>
                                            <Popup
                                                openPopup={props.openPopupAvaliacao}
                                                setOpenPopup={props.setOpenPopupAvaliacao}
                                            >
                                                <Evaluation name={perfil.name} nameOfTheCommented={props.name} type="voluntariado" closePopup={props.closeAvaliacao} />
                                            </Popup></div>
                                    </> : <></>}
                                </>
                                }
                                
                            </>}
                        </Grid>
                    </Grid >
                </div >
            </div></> : <></>
        }</>
    );
}

export default InfoVoluntariado
